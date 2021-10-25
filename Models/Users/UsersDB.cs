using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialNetworkReactTest1.Models.Users
{
    public class UsersDB : DbContext
    {
        public DbSet<User> Users { get; set; }
        public UsersDB(DbContextOptions<UsersDB> options)
            : base(options)
        {
            Database.EnsureCreated();   // создаем базу данных при первом обращении
        }

    }
}
