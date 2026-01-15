using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class AppDbContext(DbContextOptions options) : DbContext(options)
    /*
    equals to this Java context:
    public class AppDbContext extends DbContext {
        
        public AppDbContext(DbContextOptions options) {
            super(options);
        }
    }
    */
    {
        public required DbSet<Activity> Activities { get; set; }
    }
}
