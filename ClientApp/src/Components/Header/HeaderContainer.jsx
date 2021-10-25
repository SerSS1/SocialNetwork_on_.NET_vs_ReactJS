import {connect} from "react-redux";
import {LoginAC} from "../../Redux/reducers/Login_reducer";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        login_state: state.login_state
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        Authorization: (login, password) => {
            dispatch(LoginAC(login, password));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default UsersContainer;