import React from "react";
import initialState, {init_users_state, Login_user} from "../../Redux/initialState";
import {NavLink} from "react-router-dom";


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Login_user('login', false, null);
    }

    render() {
        return <div>
            <form action="">
                <p>Login</p>
                <input type="text"/>
                <p>Password</p>
                <input type="password"/>
                <br/>
                <input type="submit"/>
            </form>
            <p></p>

        </div>
    }
}

export default LoginPage;