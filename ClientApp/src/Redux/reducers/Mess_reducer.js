import initialState from "../initialState";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const GET_AJAX = 'GET_AJAX';

const Message_reducer = (state = initialState('Dialogs',true), action) => {

    switch (action.type) {
        case GET_AJAX:
            return action.message_state
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                new_message_body: action.message_body
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages_state:
                    [
                        ...state.messages_state,
                        {user: 1, message: state.new_message_body}
                    ],
                new_message_body: 'Enter your message'
            }
        default:
            return state;
    }
}

export const AjaxStateReadyActionCreator = (message_state) => ({
    type: GET_AJAX,
    message_state: message_state
});

export const addMessageActionCreator = (text) => ({
    type: ADD_MESSAGE,
    message_text: text
});

export const updateMessageAreaActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    message_body: text
});

export default Message_reducer;