import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';

import './App.css';
import UsersList from './components/UsersList';
import UserInfo from './components/UserInfo';

function App() {
    return (
        <div className="ui container w-600">
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={UsersList} />
                    <Route path="/users/:id" exact component={UserInfo} />
                    <Route path="*" render={() => <Redirect to="/" />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
