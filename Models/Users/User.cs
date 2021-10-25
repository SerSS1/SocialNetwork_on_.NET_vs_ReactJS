using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialNetworkReactTest1.Models.Users
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Followed { get; set; }
        public string PhotoURL { get; set; }
        public string Country { get; set; }
    }
}
