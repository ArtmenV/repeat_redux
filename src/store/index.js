import { createStore } from 'redux'
import combineReducers  from "../reducers"

const store = createStore(combineReducers)

window.store = store

export default store