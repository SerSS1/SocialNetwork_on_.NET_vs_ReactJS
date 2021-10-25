import initialState from "../initialState";


const SETSTATE = 'SETSTATE';

const Profile_reducer = (state = initialState('UserProfile', true), action) => {

    switch (action.type) {
        case SETSTATE:
            return action.profile_state;
        default:
            return state;
    }
}

export const StateReadyAC = (state) => ({
    type: SETSTATE,
    profile_state: state
});

export default Profile_reducer;