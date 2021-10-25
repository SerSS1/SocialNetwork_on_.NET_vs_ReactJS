import {connect} from "react-redux";
import {
    addMessageActionCreator, AjaxStateReadyActionCreator, GetAjaxStateActionCreator,
    updateMessageAreaActionCreator,
} from "../../Redux/reducers/Mess_reducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
    return {
        dialog_list_state: state.dialog_list_state,
        messages_state: state.messages_state
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        ajaxReady: (message_state) => {
            dispatch(AjaxStateReadyActionCreator(message_state))
        },
        send_Message: (body) => {
            dispatch(addMessageActionCreator(body))
        },
        update_Message_Area: (body) => {
            dispatch(updateMessageAreaActionCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;