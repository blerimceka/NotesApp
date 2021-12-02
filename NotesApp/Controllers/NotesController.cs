using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    }
}
