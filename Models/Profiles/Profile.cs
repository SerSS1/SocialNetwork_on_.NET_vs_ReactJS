using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialNetworkReactTest1.Models
{
    public class Profile : DbContext
    {
        public string userName;
        public string userSurName;
        public int age;
        public string avatarURL;
        public string status;
    }
}
