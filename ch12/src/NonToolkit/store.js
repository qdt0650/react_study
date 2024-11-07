import { createStore } from 'redux'
import counterReducer from './counterReducer'

// store에 reducer저장
const store = createStore(counterReducer)

export default store
