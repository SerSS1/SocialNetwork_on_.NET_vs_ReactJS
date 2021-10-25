import initialState from "../initialState";

const LOGIN = 'LOGIN';

const Registration_reducer = (state = initialState('Registration', true), action) => {

    switch (action.type) {
        case LOGIN:
            return {
                
            }
        default:
            return state;
    }
}


export const RegistrationAC = (login, password) => ({
    type: LOGIN,
    user_login: login,
    user_password: password
});


export default Registration_reducer;