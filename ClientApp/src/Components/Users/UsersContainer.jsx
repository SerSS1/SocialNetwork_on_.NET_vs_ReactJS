import {connect} from "react-redux";
import Users from "./Users";
import {FollowAC, SetPageAC, SetUsersAC, UnFollowAC} from "../../Redux/reducers/Users_reducer";


let mapStateToProps = (state) => {
    return {
        users_state: state.users_state
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(FollowAC(userId))
        },
        unfollow: (userId) => {
            dispatch(UnFollowAC(userId))
        },
        setPage: (page) => {
            dispatch(SetPageAC(page))
        },
        setUsers: (user_state) => {
            dispatch(SetUsersAC(user_state))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;