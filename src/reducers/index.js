import { combineReducers } from 'redux';

import githubUsersReducer from './githubUsersReducer';

export default combineReducers({
  githubUsers: githubUsersReducer,
});
