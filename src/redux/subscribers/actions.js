import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from './types'

// add subscriber
export const addSubscriber = () => {
    return {
        type: ADD_SUBSCRIBER
    }
}

// remove subscriber
export const removeSubscriber = () => {
    return {
        type: REMOVE_SUBSCRIBER
    }
}