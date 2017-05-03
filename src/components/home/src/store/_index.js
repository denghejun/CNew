import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/_index'

const createStoreProxy = () => {
    return createStore(reducers, applyMiddleware(thunk));
}

export default createStoreProxy;