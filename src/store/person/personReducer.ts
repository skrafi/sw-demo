import { Action } from '../../types/common';

const initState = {
    personList: [{ name: 'Luke' }, { name: 'Obi wan' }],
};

const personReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case 'UPDATE_PERSON_LIST':
            return {
                ...state,
                personList: action.payload,
            };
        default:
            return state;
    }
};

export default personReducer;
