import ua from "../../Pictures/dialog-avatar.jpg";
import React from "react";
import initialState, {init_users_state} from "../../Redux/initialState";
import u from "./Users.module.css"
import User_profile from "./User_profile";


class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        initialState('Users', false, this.props.setUsers, this.props.users_state.pageNumber);
    }
    setPage(page) {
        this.props.setPage(page);
        init_users_state(false, this.props.setUsers, page);
    }

    render() {
        let numberOfPages = this.props.users_state.totalPages;
        let currentPage = this.props.users_state.pageNumber;
        let pages = [];


        if(numberOfPages <= 4) {
            for (let i=1; i <= numberOfPages; i++) {
                pages.push(i);
            }
        }
        else {
            let j = (currentPage <= 4) ? 1 : (currentPage-3);
            for (let i=0; i < 4 ; i++) {
                pages.push(j+i);
            }
        }
        //debugger
        return <div>
            <div className={u.nav_pages}>
                {
                    pages.map((i) => {
                        return <span onClick={() => {this.setPage(i)}}>{i}</span>
                    })
                }

            </div>

            {
                this.props.users_state.users
                    .map(u => <User_profile
                        userInfo={u}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}/>)
            }
        </div>
    }
}

export default Users;