import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './types'

const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = (items) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: items
    }
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => dispatch(fetchUserSuccess(users)))
            .catch(error => dispatch(fetchUserFailure(error)))
    }
}