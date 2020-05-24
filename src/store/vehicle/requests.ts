import axios from 'axios';
import { API_URL } from '../../constants/endpoints';
import { Response, PersonResponse } from '../../types/response';
import { Dispatch } from 'redux';
// import { fetchList } from '../../helpers/fetchList';

export const fetchVehicleList = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'GET_VEHICLE_LIST',
        });
        return axios
            .get(`${API_URL}vehicles`)
            .then((res: Response) => res.data.results)
            .then((data) => {
                dispatch({
                    type: 'UPDATE_VEHICLE_LIST',
                    payload: data,
                });
            })
            .catch((err) => {
                throw err;
            });
    };
};

export const fetchVehicleDetails = (personId: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'GET_VEHICLE_DETAILS',
        });
        return axios
            .get(`${API_URL}vehicles/${personId}`)
            .then(async (res: PersonResponse) => {
                // const species = (await fetchList(res.data.species)) || [];
                // const vehicle = (await fetchList([res.data.homeworld])) || [];
                // const vehicles = (await fetchList(res.data.vehicles)) || [];
                // return Promise.all([species, vehicle, vehicles]).then(() => {
                return {
                    ...res.data,
                    // homeworld: vehicle[0],
                    // species,
                    // vehicles,
                };
                // });
            })
            .then((data) => {
                dispatch({
                    type: 'UPDATE_VEHICLE_DETAILS',
                    payload: data,
                });
            })
            .catch((err) => {
                throw err;
            });
    };
};
