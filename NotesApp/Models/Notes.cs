using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApp.Models
{
    public class Notes
    {

        public int Id { get; set; }

        public int UserId { get; set; }

        public Users users;

        public string Title { get; set; }

        public string Description { get; set; }

    }
}
