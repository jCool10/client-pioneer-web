import { createStore, combineReducers } from 'redux';

import { reducers } from './reducers/reducer';
import { MemberReducer } from './reducers/MemberReducer';
import { EventReducer } from './reducers/EventReducer';
import { ProductReducer } from './reducers/ProductReducer';

const rootReducer = combineReducers({ reducers, MemberReducer, EventReducer, ProductReducer });

export const store = createStore(rootReducer);
