import { createStore, combineReducers } from 'redux'
import reducers from '../reducers/_index'
const createStoreProxy = () => {
    return createStore(combineReducers(reducers));
}

export default createStoreProxy;