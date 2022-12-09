import {combineReducers} from 'redux';
import { searchReducer } from 'state/reducers/search.reducer';

export const rootReducer = combineReducers({
    searchReducer: searchReducer,
});

export type State= ReturnType<typeof rootReducer>