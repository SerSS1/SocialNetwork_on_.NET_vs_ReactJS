import React from 'react'
import m from "./Main_content.module.css";
import {Route} from "react-router-dom"
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import LoginPage from "../Authorization/LoginPage";
import RegistrationPage from "../Authorization/RegistrationPage";


let Main_content = (props) => {
    return (
        <div className={m.content}>
            <Route path='/profile/:userID?' render={ () => <ProfileContainer /> }/>
            <Route path='/dialogs' render={ () => <DialogsContainer />} />
            <Route path='/Users' render={ () => <UsersContainer />} />
            <Route path='/auth' render={ () => <LoginPage />} />
            <Route path='/registration' render={ () => <RegistrationPage />} />
        </div>
    );
}

export default Main_content;