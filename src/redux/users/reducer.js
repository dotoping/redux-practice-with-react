import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './types'

const initialState = {
    items: [],
    loading: false,
    err: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                err: action.payload,
                loading: false

            }
        default: return state
    }
}

export default usersReducer