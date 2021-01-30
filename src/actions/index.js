import githubApi from '../github-api';
import history from '../history';

import { FETCH_USER, FETCH_USERS, CLEAR_USER } from "./types";

export const fetchUsers = () => async (dispatch) => {
    const response = await githubApi.get('/users');

    dispatch({ type: FETCH_USERS, payload: response.data });
}

export const fetchUser = (id) => async (dispatch) => {
    try {
        const response = await githubApi.get(`/users/${id}`);
    
        dispatch({ type: FETCH_USER, payload: response.data });
    } catch (e) {
        alert(e);
        history.push('/');
    }
}

export const clearUser = () => {
    return { type: CLEAR_USER }
}
