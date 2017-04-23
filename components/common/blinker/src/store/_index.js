import { createStore, combineReducers } from 'redux'
import reducers from '../reducers/_index'
const createStoreProxy = () => {
    return createStore(reducers);
}

export default createStoreProxy;