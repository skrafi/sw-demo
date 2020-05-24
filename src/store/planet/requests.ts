import axios from 'axios';
import { API_URL } from '../../constants/endpoints';
import { Response, PlanetResponse } from '../../types/response';
import { Dispatch } from 'redux';
import { fetchList } from '../../helpers/fetchList';

export const fetchPlanetList = (page = 1) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'GET_PLANET_LIST',
        });
        return axios
            .get(`${API_URL}planets?page=${page}`)
            .then((res: Response) => res.data)
            .then((data) => {
                dispatch({
                    type: 'UPDATE_PLANET_LIST',
                    payload: data,
                });
            })
            .catch((err) => {
                throw err;
            });
    };
};

export const fetchPlanetDetails = (personId: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'GET_PLANET_DETAILS',
        });
        return axios
            .get(`${API_URL}planets/${personId}`)
            .then(async (res: PlanetResponse) => {
                const residents = (await fetchList(res.data.residents)) || [];
                return Promise.all([residents]).then(() => {
                    return {
                        ...res.data,
                        residents,
                    };
                });
            })
            .then((data) => {
                dispatch({
                    type: 'UPDATE_PLANET_DETAILS',
                    payload: data,
                });
            })
            .catch((err) => {
                throw err;
            });
    };
};
