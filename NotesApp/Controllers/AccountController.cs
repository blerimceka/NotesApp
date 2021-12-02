using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotesApp.Data;
using NotesApp.DTOs;
using NotesApp.Interfaces;
using NotesApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace NotesApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly DataContext dataContext;
        private readonly ITokenService tokenService;

        public AccountController(DataContext dataContext, ITokenService tokenService)
        {
            this.dataContext = dataContext;
            this.tokenService = tokenService;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await UserExist(registerDto.Username)) return BadRequest("Username is taken");

            using var hmac = new HMACSHA512();

            var user = new Users
            {
                UserName = registerDto.Username,
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                Email = registerDto.Email,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };

            dataContext.Users.Add(user);
            await dataContext.SaveChangesAsync();

            return new UserDto
            {
                Id = user.Id,
                Username = user.UserName,
                Firstname = user.FirstName,
                Lastname = user.LastName,
                Email = user.Email,
                Token = tokenService.CreateToken(user)
            };

        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await dataContext.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username);
            
            if (user == null) return Unauthorized("Invalid Username");

            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            for(int i = 0; i<computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid Password");
            }

            return new UserDto
            {
                Id = user.Id,
                Username = user.UserName,
                Firstname = user.FirstName,
                Lastname = user.LastName,
                Email = user.Email,
                Token = tokenService.CreateToken(user)
            };

        }

        private async Task<bool> UserExist(string username)
        {
            return await dataContext.Users.AnyAsync(x => x.UserName == username.ToLower());
        }

    }
}
