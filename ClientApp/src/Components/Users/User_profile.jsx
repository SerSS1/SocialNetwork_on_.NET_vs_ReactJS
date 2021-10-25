import React from 'react'
import ua from "../../Pictures/dialog-avatar.jpg";
import {NavLink} from "react-router-dom";
import n from "../Navbar/Navbar.module.css";
import p from "../Users/Users.module.css";


let User_profile = (props) => {

    //let men1 = '../../Pictures/';
    //debugger
    return (
        <NavLink to={'/profile/' + props.userInfo.userId}>
            <div>
                <img src={'Pictures/' + props.userInfo.photoUrl} className={p.avatar} alt=""/>
                {props.userInfo.followed
                    ? <button onClick={() => {
                        props.unfollow(props.userInfo.userId)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(props.userInfo.userId)
                    }}>Follow</button>
                }
            </div>
            <div>
                <span>{props.userInfo.userName}</span>
                <span>{props.userInfo.country}</span>
            </div>
        </NavLink>
    );
}

export default User_profile;