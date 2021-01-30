import { FETCH_USER, FETCH_USERS, CLEAR_USER } from "../actions/types";

const INTIAL_STATE = {
    usersList: [],
    activeUser: {}
};

const usersReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, usersList: action.payload };
        case FETCH_USER:
            return { ...state, activeUser: action.payload };
        case CLEAR_USER:
            return { ...state, activeUser: {} };
        default:
            return state;
    }
};

export default usersReducer;
