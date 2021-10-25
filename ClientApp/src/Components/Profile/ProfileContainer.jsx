import {connect} from "react-redux";
import Users from "../Users/Users";
import Profile from "./Profile";
import {StateReadyAC} from "../../Redux/reducers/Profile_reducer";
import {withRouter} from "react-router";

let mapStateToProps = (state) => {
    return {
        user_profile_state: state.user_profile_state
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        StateReady: (profile_state) => {
            dispatch(StateReadyAC(profile_state))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));

export default ProfileContainer;