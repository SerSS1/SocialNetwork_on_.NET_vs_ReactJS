import React from "react";
import messStyle from "./Messages.module.css";
import da from "../../../Pictures/dialog-avatar.jpg";
import {addMessageActionCreator} from "../../../Redux/reducers/Mess_reducer";
import $ from "jquery"
import {AjaxReady} from "../../../Redux/initialState";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';


let Message_block = (props) => {
        let New_Post_area = React.createRef();

        let Add_Message = () => {
            let message = New_Post_area.current.value;
            props.send_Message(message);
            New_Post_area.current.value = 'Enter your message';
        }


        let update_text_area = () => {
            let message = New_Post_area.current.value;
            props.update_Message_Area(message);
        }

        return (
            <div className={messStyle.messages_block}>
                <div className={messStyle.companion_header}>
                    <img src={da} className={messStyle.companion_avatar}/>
                    <p className={messStyle.companion_name}>Vasya</p>
                </div>
                <Messages_in_dialog state={props.state}/>
                {/*<form action="/dialogs/index" className={messStyle.input_message_block}>*/}
                <div className={messStyle.input_message_block}>
                <textarea id="messageArea" onChange={update_text_area}
                          ref={New_Post_area}>{props.new_message_body}</textarea>
                    <button onClick={Add_Message}>Send message</button>
                </div>
            </div>
        )
    //}
}

let Messages_in_dialog = (props) => {
    //debugger;
    let message_elements = props.state.map(mess => {
            if (mess.user == 1) {
                return <p className={messStyle.user_message}>{mess.message}</p>
            } else {
                return <p className={messStyle.companion_message}>{mess.message}</p>
            }
        }
    );
    return (
        <div className={messStyle.messages}>
            {message_elements}
        </div>
    );
}

export default Message_block;