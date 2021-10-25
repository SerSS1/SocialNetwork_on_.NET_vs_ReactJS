import React from "react";
import initialState, {init_users_state} from "../../Redux/initialState";
import {NavLink} from "react-router-dom";


class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        initialState('registration', false, null);
    }

    sendData(email, password, confirm_pass, error_message_text) {
        if (email && password && confirm_pass) {
            error_message_text.value = "Ok";
        } else {
            error_message_text.value = "Вы заполнили не все поля";
        }
    }

    render() {
        let email_area = React.createRef();
        let password_area = React.createRef();
        let confirm_pass_area = React.createRef();
        let error_message_text = React.createRef();

        return <div>
            <form action="https://localhost:44354/Registration" method="post">
                <p>Email</p>
                <input type="text" ref={email_area} name="Email"/>
                <p>Password</p>
                <input type="password" ref={password_area} name="Password"/>
                <p>Confirm password</p>
                <input type="password" ref={confirm_pass_area}name="ConfirmPassword"/>
                <br/>
                <input type="submit"
                       // onClick={() => this.sendData(
                       //     email_area.current.value,
                       //     password_area.current.value,
                       //     confirm_pass_area.current.value,
                       //     error_message_text.current
                       // )}
                />
            </form>
            <br/>
            <input type="text" ref={error_message_text}></input>
        </div>
    }
}

export default RegistrationPage;