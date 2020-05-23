import { Action } from '../../types/common';

const initState = {
    personList: [{ name: 'Luke' }, { name: 'Obi wan' }],
    personDetails: null,
};

const personReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case 'UPDATE_PERSON_LIST':
            return {
                ...state,
                personList: action.payload,
            };
        case 'UPDATE_PERSON_DETAILS':
            return {
                ...state,
                personDetails: action.payload,
            };
        default:
            return state;
    }
};

export default personReducer;
