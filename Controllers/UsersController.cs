using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SocialNetworkReactTest1.Models.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace SocialNetworkReactTest1.Controllers
{
    public class UsersController : Controller
    {
        private UsersDB db;
        List<UsersDB> usersList;
        List<User> userForAdd;

        public UsersController(UsersDB context)
        {
            db = context;

            userForAdd = new List<User>
            {
               new User{ Name ="Vasya", Followed = false, Country="USA", PhotoURL=""},
               new User{ Name ="Petya", Followed = true, Country="UKR", PhotoURL=""},
               new User{ Name ="Kolya", Followed = false, Country="CHINA", PhotoURL=""}
            };
        }


        [Route("Users/AddUsers")]
        public ViewResult AddUsers()
        {
            foreach (User u in userForAdd)
            {
                db.Users.Add(u);
            }
            db.SaveChangesAsync();
            return View("Result OK");
        }

        [Route("Users/UpdateUserInfo")]
        public ContentResult UpdateUserInfo()
        {
            IQueryable<User> source = db.Users;
            List<User> userForUpdate = source.ToList();
            int count = 1;

            string[] photoUrl = {"men1.png", "men2.png", "men3.jpg"};

            for(int i=0, j=0; j < userForUpdate.Count; j++, i++)
            {
                if (i == 3) i = 0;
                userForUpdate[j].PhotoURL = photoUrl[i];
            }

            db.SaveChanges();

            return new ContentResult
            {
                ContentType = "text/html",
                StatusCode = (int)HttpStatusCode.OK,
                Content = "<html><body>Result OK" + userForUpdate[5].PhotoURL + "</body></html>"
            };
        }

        [Route("Users/GetAjaxData/{page?}")]
        public JsonResult GetAjaxData(int page = 1)
        {
            int pageSize = 4;   // количество элементов на странице

            IQueryable<User> source = db.Users;
            var count = source.Count();
            var items = source.Skip((page - 1) * pageSize).Take(pageSize).ToList();

            PageViewModel pageViewModel = new PageViewModel(count, page, pageSize);
            UsersViewModel viewModel = new UsersViewModel
            {
                PageViewModel = pageViewModel,
                Users = items
            };
            return Json(viewModel);
        }
    }
}
