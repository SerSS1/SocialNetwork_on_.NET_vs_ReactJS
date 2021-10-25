import $ from "jquery";

let initialState = (type) => {
    let state;
    let state_is_null = 0;

    switch (type) {
        case 'Dialogs':
            state = {
                dialog_list_state: [
                    {name: "Vasya", lastMessage: 'Last Message'},
                    {name: "Petya", lastMessage: 'Last Message'},
                    {name: "Dima", lastMessage: 'Last Message'},
                    {name: "Kate", lastMessage: 'Last Message'},
                ],
                messages_state: [
                    {user: 1, message: 'hello'},
                    {user: 2, message: 'how are you'},
                    {user: 1, message: 'good'},
                    {user: 2, message: 'and you?'},
                    {user: 1, message: 'too'},
                    {user: 2, message: 'ok'}
                ],
                new_message_body: 'Enter your message'
            };
            if (state_is_null == 0) {
                $.ajax({
                    type: "GET",
                    url: "/dialogs/GetAjaxData",
                    data: {"name": "aaa"},
                    success: function (response) {
                        //alert("Ajax work");
                        //debugger;
                        state.messages_state = [];
                        if (response != undefined) {
                            for (let mess of response.messages) {
                                //debugger;
                                state.messages_state
                                    .push({
                                        user: mess.userId,
                                        message: mess.messageBody
                                    });
                            }
                        } else alert("Init ajax error");
                        //alert(response.messages[0].messageBody);
                    },
                    failure: function (response) {
                        alert(response.responseText);
                    },
                    error: function (response) {
                        alert(response.responseText);
                    }
                });
                state_is_null = 1;
                //alert("state is set");
            }
            return state;
        case 'Users': {
            let users = [
                {userId: 1, userName: 'Vasya', followed: false, photoUrl: '', country: 'Ukraine'},
                {userId: 2, userName: 'Petya', followed: true, photoUrl: '', country: 'USA'},
                {userId: 3, userName: 'Dima', followed: false, photoUrl: '', country: 'China'}
            ]
            return users;
        }
    }

}

export default initialState;