using Microsoft.EntityFrameworkCore;
using NotesApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApp.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Users> Users { get; set; } 
        public DbSet<Notes> Notes { get; set; }
    }
}
