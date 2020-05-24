import { Action } from '../../types/common';

const initState = {
    vehicleList: [],
    vehicleListCount: 0,
    listLoding: false,
    vehicleDetails: null,
    vehicleLoading: false,
};

const personReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case 'GET_VEHICLE_LIST':
            return {
                ...state,
                listLoading: true,
            };
        case 'UPDATE_VEHICLE_LIST':
            return {
                ...state,
                vehicleList: action.payload.results,
                vehicleListCount: action.payload.count,
                listLoading: false,
            };
        case 'GET_VEHICLE_DETAILS':
            return {
                ...state,
                vehicleLoading: true,
            };
        case 'UPDATE_VEHICLE_DETAILS':
            return {
                ...state,
                vehicleDetails: action.payload,
                vehicleLoading: false,
            };
        default:
            return state;
    }
};

export default personReducer;
