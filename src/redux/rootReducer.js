import { combineReducers } from 'redux'
import inboxReducer from './messages/inboxReducer'

const rootReducer = combineReducers({
    inbox : inboxReducer
})

export default rootReducer