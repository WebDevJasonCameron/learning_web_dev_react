import React, {Component} from 'react';
import UserItem from "./userItem";

class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'mojombo',
                avatar_url: 'https://avatars0.jithubusercontent.com/u1?v=4',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: '2',
                login: 'defunkt',
                avatar_url: 'https://avatars0.jithubusercontent.com/u2?v=4',
                html_url: 'https://github.com/defunkt'
            },
            {
                id: '3',
                login: 'pjhyett',
                avatar_url: 'https://avatars0.jithubusercontent.com/u3?v=4',
                html_url: 'https://github.com/pjhyett'
            }
        ]
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => (
                    <UserItem key={user.id}>{user.login} />
                    )
                )}
            </div>
        );
    }
}

export default Users;