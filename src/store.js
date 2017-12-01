import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import oils from './reducers/oils';
import oilFormData from './reducers/oilFormData';

const reducers = combineReducers({
    oils,
    oilFormData
});

const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);