import React from 'react'
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <header className="App_header">
                <div className={h.head}>
                    <h1>My test Social Network</h1>
                    <NavLink to={'/auth'} className={h.login}>Login</NavLink>
                    <p></p>
                    <br/>
                    <NavLink to={'/registration'} className={h.login}>Registration</NavLink>
                </div>
            </header>
        );
    }
}

export default Header;
