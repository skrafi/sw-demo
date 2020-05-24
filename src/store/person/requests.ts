import axios from 'axios';
import { API_URL } from '../../constants/endpoints';
import { Response, PersonResponse } from '../../types/response';
import { Dispatch } from 'redux';
import { fetchList } from '../../helpers/fetchList';
import { UrlParamBuilder } from '../../helpers/addUrlParam';

export const fetchPersonList = (page = 1, search?: string) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'GET_PERSON_LIST',
        });
        const newUrl = new UrlParamBuilder(`${API_URL}people`);
        const peopleUrl = newUrl.addParam('page', page).addParam('search', search).url;
        return axios
            .get(peopleUrl)
            .then((res: Response) => res.data)
            .then((data) => {
                dispatch({
                    type: 'UPDATE_PERSON_LIST',
                    payload: data,
                });
            })
            .catch((err) => {
                throw err;
            });
    };
};

export const fetchPersonDetails = (personId: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'GET_PERSON_DETAILS',
        });
        return axios
            .get(`${API_URL}people/${personId}`)
            .then(async (res: PersonResponse) => {
                const species = (await fetchList(res.data.species)) || [];
                const planet = (await fetchList([res.data.homeworld])) || [];
                const vehicles = (await fetchList(res.data.vehicles)) || [];
                return Promise.all([species, planet, vehicles]).then(() => {
                    return {
                        ...res.data,
                        homeworld: planet[0],
                        species: species.map((s) => s.name),
                        vehicles,
                    };
                });
            })
            .then((data) => {
                dispatch({
                    type: 'UPDATE_PERSON_DETAILS',
                    payload: data,
                });
            })
            .catch((err) => {
                throw err;
            });
    };
};
