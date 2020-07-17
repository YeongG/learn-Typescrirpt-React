import { combineReducers } from 'redux';
import counter from './Counter';
import { counterState } from '../action/Counter';

export interface rootReducerProps {
    counter:counterState
}

const rootReducer = combineReducers<rootReducerProps>({
    counter,
});


export default rootReducer;