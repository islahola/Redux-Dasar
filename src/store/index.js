import {createStore, combineReducers} from "redux"
// combine menggabungkan reducer
import { composeWithDevTools } from "redux-devtools-extension"
//actions
//reducer
import rootReducer from './reducer'

const store = createStore(rootReducer, composeWithDevTools())

export default store
