import React from 'react'
import n from "../Navbar/Navbar.module.css";
import {NavLink} from "react-router-dom";

let Navbar = () => {
    return (
        <div className={n.navbar_wrapper}>
            <NavLink to='/profile' className={n.navbar_item} activeClassName={n.active}>Profile</NavLink>
            <NavLink to='/news' className={n.navbar_item} activeClassName={n.active}>News</NavLink>
            <NavLink to='/dialogs' className={n.navbar_item} activeClassName={n.active}>Dialogs</NavLink>
            <NavLink to='/Users' className={n.navbar_item} activeClassName={n.active}>Users</NavLink>
        </div>
    );
}

export default Navbar;