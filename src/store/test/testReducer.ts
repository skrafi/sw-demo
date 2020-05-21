import * as testActions from './actions';

const initState = 0;

export default function test(state = initState, action: Action) {
    switch (action.type) {
        case testActions.INCEREMENT:
            return state + 1;
        case testActions.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

interface Action {
    type: string;
}
