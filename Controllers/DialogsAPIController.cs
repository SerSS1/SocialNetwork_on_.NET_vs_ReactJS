using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using SocialNetworkReactTest1.Models;
using SocialNetworkReactTest1.Models.Dialogs;

namespace SocialNetworkReactTest1.Controllers
{
    public class DialogsAPIController : Controller
    {
        List<DialogMessages> dialogMessages;
        List<DialogUserInfo> userInDialogInfo;
        List<DialogsList> dialogsList;
        DialogsData dialogsData;
        ILogger<DialogsAPIController> log;

        public DialogsAPIController(ILogger<DialogsAPIController> logger)
        {
            dialogMessages = new List<DialogMessages>
            {
                new DialogMessages{userId=0, messageBody="hello1", time=700 },
                new DialogMessages{userId=1, messageBody="hello2", time=700 },
                new DialogMessages{userId=0, messageBody="How are you?1", time=700 },
                new DialogMessages{userId=1, messageBody="good", time=700 },
                new DialogMessages{userId=0, messageBody="I'm too", time=700 },
                new DialogMessages{userId=1, messageBody="Ok1", time=700 },
                new DialogMessages{userId=0, messageBody="Ok2", time=700 }
            };

            userInDialogInfo = new List<DialogUserInfo>
            {
                new DialogUserInfo{userId=0, userName="Vasya", userAvatarUrl="" },
                new DialogUserInfo{userId=1, userName="Petya", userAvatarUrl="" },
            };

            dialogsList = new List<DialogsList>
            {
                new DialogsList {name="Vasya", lastMessage= "Last Message Vasya", avatarURL=""},
                new DialogsList {name="Petya", lastMessage= "Last Message Petya", avatarURL=""},
                new DialogsList {name="Dima", lastMessage= "Last Message Dima", avatarURL=""},
                new DialogsList {name="Kate", lastMessage= "Last Message Kate", avatarURL=""}
            };
        }

        //[Route("")]
        [Route("dialogs/GetAjaxData")]
        public JsonResult GetAjaxData()
        {
            dialogsData = new DialogsData
            {
                UserInfoData = userInDialogInfo,
                messagesData = dialogMessages,
                dialogsListData = dialogsList
            };

            return Json(dialogsData);
        }





        //[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        //public IActionResult Error()
        //{
        //    return View(new ErrorModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        //}
    }
}
