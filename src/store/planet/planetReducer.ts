import { Action } from '../../types/common';

const initState = {
    planetList: [],
    planetListCount: 0,
    listLoding: false,
    planetDetails: null,
    planetLoading: false,
};

const personReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case 'GET_PLANET_LIST':
            return {
                ...state,
                listLoading: true,
            };
        case 'UPDATE_PLANET_LIST':
            return {
                ...state,
                planetList: action.payload.results,
                planetListCount: action.payload.count,
                listLoading: false,
            };
        case 'GET_PLANET_DETAILS':
            return {
                ...state,
                planetLoading: true,
            };
        case 'UPDATE_PLANET_DETAILS':
            return {
                ...state,
                planetDetails: action.payload,
                planetLoading: false,
            };
        default:
            return state;
    }
};

export default personReducer;
