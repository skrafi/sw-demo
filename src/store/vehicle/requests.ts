import axios from 'axios';
import { API_URL } from '../../constants/endpoints';
import { Response, VehicleResponse } from '../../types/response';
import { Dispatch } from 'redux';
import { camelCaseKeys } from '../../helpers/camelCaseKeys';
import { fetchList } from '../../helpers/fetchList';

export const fetchVehicleList = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'GET_VEHICLE_LIST',
        });
        return axios
            .get(`${API_URL}vehicles`)
            .then((res: Response) => res.data)
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
            .then(async (res: VehicleResponse) => {
                const formattedData = camelCaseKeys(res.data);
                const pilots = (await fetchList(res.data.pilots)) || [];
                return Promise.all([pilots]).then(() => {
                    return {
                        ...formattedData,
                        pilots,
                    };
                });
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
