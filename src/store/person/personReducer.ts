import { Action } from '../../types/common';

const initState = {
    personList: [],
    personListCount: 0,
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
                personList: action.payload.results,
                personListCount: action.payload.count,
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
