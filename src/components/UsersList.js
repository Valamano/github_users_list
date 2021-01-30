import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';
import UserItem from './UserItem';

function UsersList(props) {
    useEffect(() => {
        props.fetchUsers();
    }, [])

    let getUserList = () => {
        return props.githubUsersList.map(user => {
            return (
                <UserItem key={user.id} user={user}/>
            )
        })
    }

    if (!props.githubUsersList.length) {
        return <div className="ui segments">Data is loading</div>
    }

    return (
        <Fragment>
            <h1 className="ui header">Github users list</h1>
            <div className="ui segments">
                { getUserList() }
            </div>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return { githubUsersList: state.githubUsers.usersList };
};

export default connect(
    mapStateToProps,
    { fetchUsers }
)(UsersList);
