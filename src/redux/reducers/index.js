import { combineReducers } from 'redux'
import courses from './courseRducer'
import authors from './authorReducer'
import apiCallsInProgress from "./apiStatusReducer";
const rootReducer = combineReducers({
    courses,
    authors,
    apiCallsInProgress
})

export default rootReducer