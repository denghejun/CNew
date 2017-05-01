import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/_index'

const middleware = applyMiddleware(thunk);
const createStoreProxy = () => {
    return createStore(reducers, middleware);
}

export default createStoreProxy;