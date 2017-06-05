import { createActions } from 'redux-actions'
import locationAction from './locationAction'

const actionCreators = createActions({
  APP: {
    LOCATION: locationAction
  }
})

export default actionCreators
