import {
    INCREASE,
    DECREASE,
    counterState,
    actionType
} from '../../action/Counter';

const initialState:counterState = {
    number:0
};

const counterReducer = (
    state:counterState = initialState, 
    action:actionType
):counterState => {
    switch(action.type) {
        case INCREASE: {
            return {
                number:state.number + 1,
            };
        }
        case DECREASE: {
            return {
                number:state.number - 1,
            };
        }
        default: {
            return state;
        }
    }
};

export default counterReducer;