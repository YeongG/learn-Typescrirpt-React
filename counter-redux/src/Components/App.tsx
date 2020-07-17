import React, { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../Modules/action/Counter';
import { rootReducerProps } from '../Modules/reducer';

const App:FC = () => {
    
    const dispatch = useDispatch();
    const number = useSelector((state:rootReducerProps) => state.counter.number);

    const onIncrease = () => {
        dispatch(increase());
    }

    const onDecrease = () => {
        dispatch(decrease());
    }

    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default App;