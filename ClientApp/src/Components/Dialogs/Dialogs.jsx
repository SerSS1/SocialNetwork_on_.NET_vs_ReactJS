import React from 'react'
import m from "./Dialogs.module.css";
import da from "../../Pictures/dialog-avatar.jpg"
import dialog_list_element from "./Dialogs_list/Dialogs_list";
import Message_block from "./Messages_block/Messages";
import Dialog_list from "./Dialogs_list/Dialogs_list";
import initialState from "../../Redux/initialState";



class Dialogs extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        initialState('Dialogs',false, this.props.ajaxReady);
    }

    render() {
        return (
            <div className={m.dialogs_wrapper}>
                <Dialog_list state={this.props.messages_state.dialog_list_state}/>
                <Message_block state={this.props.messages_state.messages_state}
                               new_message_body = {this.props.messages_state.new_message_body}
                               send_Message={this.props.send_Message}
                               update_Message_Area={this.props.update_Message_Area}/>
            </div>
        );
    }
}

export default Dialogs;