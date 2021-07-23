import { combineReducers } from "redux";
import viewsReducer from "./views/reducer";
import subscriberReducer from "./subscribers/reducer";
import commentsReducer from "./comments/reducer"
import usersReducer from "./users/reducer";


const rootReducer = combineReducers({
    views: viewsReducer,
    subscribers: subscriberReducer,
    comments: commentsReducer,
    users: usersReducer
})

export default rootReducer