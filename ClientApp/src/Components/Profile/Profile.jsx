import React from 'react'
import p from './Profile.module.css';
import ava from '../../Pictures/men-avatar.jpg'
import initialState, {get_user_info} from "../../Redux/initialState";
import {StateReadyAC} from "../../Redux/reducers/Profile_reducer";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userID;

        //initialState('UserProfile', false, this.props.StateReady);
        get_user_info(false, userId, this.props.StateReady);
    }

    render() {
        if(this.props.user_profile_state) {
            //debugger
            return (
                <div className={p.profile_wrapper}>
                    <div className={p.avatar}>
                        <img src={'Pictures/' + this.props.user_profile_state.photoURL}/>
                    </div>

                    <div className={p.user_info}>
                        <p>Name: {this.props.user_profile_state.name}</p>
                        <p>Surname: Pupkin</p>
                        <p>Country: {this.props.user_profile_state.country}</p>
                    </div>
                </div>
            );
        }
        else return <p>Wait</p>;

    }
}

export default Profile;
