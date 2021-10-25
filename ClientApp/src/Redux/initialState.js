import * as axios from "axios";


// let state_is_null = 0;
// let ajax_Ok = 0;

function initialState(type, startInit, reducer) {
    switch (type) {
        case 'login':
            let LoginData = null;
            return LoginData;
        case 'Registration':
            let RegistrationData = null;
            return RegistrationData;
        case 'MyProfile':
            let myProfileinfo = get_user_info(startInit, 1, reducer);
            return myProfileinfo;
        case 'UserProfile':
            let userInfo = get_user_info(startInit, 1, reducer);
            return userInfo;
        case 'Dialogs':
            let dialogs = init_dialoges_state(startInit, reducer);
            return dialogs;
        case 'Users': {
            let users = init_users_state(startInit, reducer);
            return users;
        }
    }
}

export function Login_user(startInit, userID = 1, reducer) {
    let userAuthData = null;

    if (startInit === false) {
        axios.post("https://localhost:44354/UserProfile/GetAjaxData/", userAuthData)
            .then(response => {
                userAuthData = response.data;
                reducer(userInfo);
            });
    }
    return userAuthData;
}

export function get_user_info(startInit, userID = 1, reducer) {
    let userInfo = null;

    if (startInit === false) {
        axios.get("https://localhost:44354/UserProfile/GetAjaxData/" + userID)
            .then(response => {
                userInfo = response.data;
                reducer(userInfo);
            });
    }
    return userInfo;
}

export function init_users_state(startInit, reducer, page = 1) {
    let usersState = {
        users: [],
        pageNumber: 1,
        totalPages: 1
    };
    if (page !== 1) {
        usersState.pageNumber = page;
    }

    if (startInit === false) {
        axios.get("https://localhost:44354/Users/GetAjaxData/" + usersState.pageNumber)
            .then(response => {
                //debugger
                for (let us of response.data.users) {
                    usersState.users.push({
                        userId: us.id,
                        userName: us.name,
                        followed: us.followed,
                        photoUrl: us.photoURL,
                        country: us.country
                    });
                }
                usersState.pageNumber = response.data.pageViewModel.pageNumber;
                usersState.totalPages = response.data.pageViewModel.totalPages;

                reducer(usersState);
            });
    }
    return usersState;
}

function init_dialoges_state(startInit, reducer) {
    let dialog_state = {
        dialog_list_state: [],
        messages_state: [],
        new_message_body: 'Enter your message',
    };

    if (startInit === false) {
        axios.get("https://localhost:44354/dialogs/GetAjaxData").then(response => {

            for (let mess of response.data.dialogsListData) {
                dialog_state.dialog_list_state
                    .push({
                        name: mess.name,
                        lastMessage: mess.lastMessage
                    });
            }
            //Init dialog messages block state
            for (let mess of response.data.messagesData) {
                dialog_state.messages_state
                    .push({
                        user: mess.userId,
                        message: mess.messageBody
                    });
            }
            reducer(dialog_state);
            return;
        });
    }
    return dialog_state;
}

export default initialState;