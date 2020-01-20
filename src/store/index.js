import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// Note: this API requires redux@>=3.1.0
export default function configureStore(initialState = {}) {
    const store = createStore(rootReducer, initialState ,applyMiddleware(thunk));
    return store;
}
