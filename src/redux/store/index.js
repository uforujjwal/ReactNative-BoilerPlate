import {applyMiddleware, createStore} from 'redux';
import reducers from '../reducers';
import ReduxThunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;