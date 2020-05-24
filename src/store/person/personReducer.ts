import { Action } from '../../types/common';

const initState = {
    personList: [],
    listLoding: false,
    personDetails: null,
    personLoading: false,
};

const personReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case 'GET_PERSON_LIST':
            return {
                ...state,
                listLoading: true,
            };
        case 'UPDATE_PERSON_LIST':
            return {
                ...state,
                personList: action.payload,
                listLoading: false,
            };
        case 'GET_PERSON_DETAILS':
            return {
                ...state,
                personLoading: true,
            };
        case 'UPDATE_PERSON_DETAILS':
            return {
                ...state,
                personDetails: action.payload,
                personLoading: false,
            };
        default:
            return state;
    }
};

export default personReducer;
