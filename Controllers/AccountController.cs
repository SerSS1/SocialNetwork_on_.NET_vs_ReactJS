using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SocialNetworkReactTest1.Models.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SocialNetworkReactTest1.Controllers
{
    public class AccountController : Controller
    {
        private UserAuthContext db;
        public AccountController(UserAuthContext context)
        {
            db = context;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<JsonResult> Login(UserAuthInfo userData)
        {
            UserAuthInfo user = await db.UserAuth.FirstOrDefaultAsync(u => u.Email == userData.Email && u.Password == userData.Password);
            if (user != null)
            {
                await Authenticate(user.Email); // аутентификация
            }
            else
            {

            }
            return Json(user);
        }

        private async Task Authenticate(string userName)
        {
            // создаем один claim
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, userName)
            };
            // создаем объект ClaimsIdentity
            ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            // установка аутентификационных куки
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        }


        [HttpPost]
        [Route("Registration")]
        public async Task<ContentResult> Registration(RegisterUser userData)
        {
            db.UserAuth.Add(new UserAuthInfo { Email = "111", Password = "111" });
            await db.SaveChangesAsync();

            if (userData.Email != null && userData.Password != null)
            {
                
                //db.UserAuthInfo.Add(new UserAuthInfo { Email = userData.Email, Password = userData.Password });
                //await db.SaveChangesAsync();

                //await Authenticate(userData.Email); // аутентификация
                return new ContentResult
                {
                    ContentType = "text/html",
                    StatusCode = (int)HttpStatusCode.OK,
                    Content = "<html><body>Result OK" +
                    "<p>Email: " + userData.Email + "</p>" +
                    "<p>Pass: " + userData.Password + "</p>" +
                    "</body></html>"
                };

                //return Redirect("/profile");

                //UserAuthInfo user = await db.UserAuthInfo.FirstOrDefaultAsync(u => u.Email == userData.Email);
                //if (user == null)
                //{
                //    // добавляем пользователя в бд
                //    db.UserAuthInfo.Add(new UserAuthInfo { Email = userData.Email, Password = userData.Password });
                //    await db.SaveChangesAsync();

                //    await Authenticate(userData.Email); // аутентификация
                //    return Redirect("/profile");
                //}
                //else
                //{
                //    return Redirect("/profile");
                //}
                //else
                //{
                //    return Redirect("/profile");
                //}
            }
            else
            {
                //return Redirect("/auth");
                return new ContentResult
                {
                    ContentType = "text/html",
                    StatusCode = (int)HttpStatusCode.OK,
                    Content = "<html><body>Result ERROR<p>" + userData.Email + "</p></body></html>"
                };
            }
        }

    }
}
