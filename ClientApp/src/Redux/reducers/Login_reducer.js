import initialState from "../initialState";

const LOGIN = 'LOGIN';

const Login_reducer = (state = initialState('login', true), action) => {

    switch (action.type) {
        case LOGIN:
            return {
                
            }
        default:
            return state;
    }
}


export const LoginAC = (login, password) => ({
    type: LOGIN,
    user_login: login,
    user_password: password
});


export default Login_reducer;