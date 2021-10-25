import {connect} from "react-redux";
import Users from "./Users";
import {FollowAC, SetPageAC, SetUsersAC, UnFollowAC} from "../../Redux/reducers/Users_reducer";
import LoginPage from "./LoginPage";


let mapStateToProps = (state) => {
    return {
        login_state: state.login_state
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(FollowAC(userId))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default UsersContainer;