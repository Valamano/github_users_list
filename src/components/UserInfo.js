import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchUser, clearUser } from '../actions';
import Modal from './Modal';
import history from '../history';

const UserInfo = (props) => {
    const { id } = props.match.params;

    useEffect(() => {
        props.fetchUser(id);
    }, [])

    let onDismiss = () => {
        props.clearUser();
        history.push('/');
    }

    let getContent = () => {
        let {
            avatar_url,
            name,
            followers,
            following,
            created_at,
            company,
            email,
            location,
            blog,
            bio,
        } = props.activeUser;

        return (
            <div className="ui segments">
                <div className="ui segment">
                    <img src={avatar_url} alt={name} height="250px"></img>
                </div>
                <div className="ui segment">
                    <p>Name: { name }</p>
                </div>
                <div className="ui segment">
                    <p>Followers: { followers }</p>
                </div>
                <div className="ui segment">
                    <p>Following: { following }</p>
                </div>
                <div className="ui segment">
                    <p>Created at: { created_at }</p>
                </div>
                <div className="ui segment">
                    <p>Company: { company }</p>
                </div>
                <div className="ui segment">
                    <p>Email: { email }</p>
                </div>
                <div className="ui segment">
                    <p>Location: { location }</p>
                </div>
                <div className="ui segment">
                    <p>Blog: { blog }</p>
                </div>
                <div className="ui segment">
                    <p>Bio: { bio }</p>
                </div>
            </div>
        )
    }
    return (
        <Modal
            title="User Info"
            content={getContent()}
            onDismiss={onDismiss}
        />

    )
}

let mapStateToProps = (state) => {
    return { activeUser: state.githubUsers.activeUser }
}

export default connect(
    mapStateToProps,
    { fetchUser, clearUser }
)(UserInfo);