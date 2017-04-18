import { createStore } from 'redux'
const createStoreProxy = () => { return createStore(() => { return {} }); }
export default createStoreProxy;
