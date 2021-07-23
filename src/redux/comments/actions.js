import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from './types'

const fetchCommentsRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}

const fetchCommentsSuccess = (items) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: items
    }
}

const fetchCommentsFailure = (error) => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: error
    }

}

export const fetchComments = () => {
    return (dispatch) => {
        dispatch(fetchCommentsRequest())
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(items => dispatch(fetchCommentsSuccess(items)))
            .catch(error => dispatch(fetchCommentsFailure(error)))
    }
}