import {combineReducers, createStore} from 'redux';
import Message_reducer from "./reducers/Mess_reducer";
import Users_reducer from "./reducers/Users_reducer";
import Profile_reducer from "./reducers/Profile_reducer";
import Login_reducer from "./reducers/Login_reducer";
import Registration_reducer from "./reducers/Registration_reducer";

let reducers = combineReducers({
    registration_state: Registration_reducer,
    login_state: Login_reducer,
    user_profile_state: Profile_reducer,
    messages_state: Message_reducer,
    users_state: Users_reducer
    }
)

const store = createStore(reducers);

export default store;