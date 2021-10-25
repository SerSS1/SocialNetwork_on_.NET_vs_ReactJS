using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialNetworkReactTest1.Models.Authorization
{
    public class UserAuthContext : DbContext
    {
        public DbSet<UserAuthInfo> UserAuth { get; set; }
        public UserAuthContext(DbContextOptions<UserAuthContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
