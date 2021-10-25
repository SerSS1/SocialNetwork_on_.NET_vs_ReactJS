using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialNetworkReactTest1.Models.Profiles
{
    public class ProfileDB : DbContext
    {
        public DbSet<Profile> Profile { get; set; }
        public ProfileDB(DbContextOptions<ProfileDB> options)
            : base(options)
        {
            Database.EnsureCreated();   // создаем базу данных при первом обращении
        }
    }
}
