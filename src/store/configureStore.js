import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const middlewares = [thunk, logger];

export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );
}
