using SocialNetworkReactTest1.Models.Dialogs;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialNetworkReactTest1.Models
{
    public class DialogsData
    {
        public IEnumerable<DialogUserInfo> UserInfoData { get; set; }
        public IEnumerable<DialogMessages> messagesData { get; set; }
        public IEnumerable<DialogsList> dialogsListData { get; set; }

    }
}
