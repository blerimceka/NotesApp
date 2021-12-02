using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApp.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string Firstname { get; set; }

        public string Lastname { get; set; }
        
        public string Email { get; set; }

        public string Token { get; set; }
    }
}
