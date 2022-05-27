import { createStore } from 'redux'
import eventsReducer from './eventsApp'

const store = createStore(eventsReducer)

export default store