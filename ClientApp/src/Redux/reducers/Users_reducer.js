import initialState from "../initialState";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETPAGE = 'SETPAGE';

const Users_reducer = (state = initialState('Users', true), action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.userId === action.user_id) {
                            return {...u, followed: true}
                        }
                        return u
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.userId === action.user_id) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }
        case SETPAGE:
            return {
                ...state,
                pageNumber: action.page
            }
        case SETUSERS:
            return action.user_state
        default:
            return state;
    }
}


export const FollowAC = (userId) => ({
    type: FOLLOW,
    user_id: userId
});

export const UnFollowAC = (userId) => ({
    type: UNFOLLOW,
    user_id: userId
});
export const SetUsersAC = (user_state) => ({
    type: SETUSERS,
    user_state: user_state
});
export const SetPageAC = (page) => ({
    type: SETPAGE,
    page: page
});

export default Users_reducer;