import React from 'react'
import m from "../Dialogs.module.css";
import dl from "./Dialogs_list.module.css";
import dialogAvatar from "../../../Pictures/dialog-avatar.jpg";
import {NavLink} from "react-router-dom";
import initialState from "../../../Redux/initialState";


let Dialog_list = (props) => {

    //debugger;
    // if(props.state.length == 0) {
    //     //debugger;
    //     initialState('Dialogs');
    // }

    let dialog_elements = props.state.map(list => {
            return (
                <NavLink to={'/dialogs/' + list.name}>
                    <div className={dl.dialog_list_item}>
                        <img src={dialogAvatar} className={m.companion_avatar}/>
                        <div className={dl.dialog_info_wrapper}>
                            <p className={dl.dialog_list_user_name}>User: {list.name}</p>
                            <p className={dl.last_user_message}>{list.lastMessage}</p>
                        </div>
                    </div>
                </NavLink>
            )
        }
    )
    return (
        <div className={dl.dialogs_list}>
            {dialog_elements}
        </div>
    )
}

export default Dialog_list;