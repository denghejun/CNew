import { combineReducers } from 'redux'
import locationReducer from './locationReducer'

const reducers = combineReducers({
  app: combineReducers({
    location: locationReducer
  })
})

export default reducers
