using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotesApp.Data;
using NotesApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly DataContext dataContext;

        public NotesController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Notes>>> GetAll()
        {
            return await dataContext.Notes.ToListAsync();
        }

        [HttpPost]
        public async Task<Notes> Create(Notes notes)
        {
            var note = new Notes
            {
                UserId = notes.UserId,
                Title = notes.Title,
                Description = notes.Description
            };

            dataContext.Notes.Add(note);
            await dataContext.SaveChangesAsync();

            return note;

        }

        [HttpDelete("{id}")]
        public Notes Delete(int id)
        {
            var note = dataContext.Notes.FirstOrDefault(x => x.Id == id);
            if(note == null)   
            {
                return null;
            }

            dataContext.Notes.Remove(note);
            dataContext.SaveChanges();

            return note;
        }

    }
}
