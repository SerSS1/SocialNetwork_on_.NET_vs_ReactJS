using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SocialNetworkReactTest1.Models;
using SocialNetworkReactTest1.Models.Profiles;
using SocialNetworkReactTest1.Models.Users;

namespace SocialNetworkReactTest1.Controllers
{
    public class ProfilePageController : Controller
    {
        User UserProfile;
        User MyProfile;
        private UsersDB db;

        public ProfilePageController(UsersDB context)
        {
            db = context;
        }

        [Route("UserProfile/GetAjaxData/{UserId?}")]
        public JsonResult GetUserProfileAjax(int UserId)
        {
            UserProfile = db.Users.Find(UserId);
            return Json(UserProfile);
        }

        [Route("MyProfile/GetAjaxData")]
        public JsonResult GetMyProfileAjax()
        {
            UserProfile = db.Users.Find(1);
            return Json(MyProfile);
        }
    }
}
