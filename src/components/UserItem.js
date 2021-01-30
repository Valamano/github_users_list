import history from '../history';

export default function UserItem({user}) {
    let getUserInfo = (id) => {
        history.push(`/users/${id}`)
    }

    return (
        <div className="ui segment d-flex flex-row cursor"
            onClick={() => getUserInfo(user.login)}>
            <img src={user.avatar_url} alt={user.name} width="100px"></img>

            <div className="d-flex flex-column ml">
                <p className="m-0 mb">{user.login}</p>
                <a href={user.html_url}
                   onClick={(e) => e.stopPropagation()}
                > { user.html_url } </a>
            </div>
        </div>
    )
}