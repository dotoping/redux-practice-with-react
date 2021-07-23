import { combineReducers } from "redux";
import viewsReducer from "./views/reducer";
import subscriberReducer from "./subscribers/reducer";


const rootReducer = combineReducers({
    views: viewsReducer,
    subscribers: subscriberReducer
})

export default rootReducer