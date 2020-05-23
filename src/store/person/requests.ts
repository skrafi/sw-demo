import axios from 'axios';
import { API_URL } from '../../constants/endpoints';
import { Response, PersonResponse } from '../../types/response';
import { Dispatch } from 'redux';

export const fetchPersonList = () => {
    return (dispatch: Dispatch) => {
        return axios
            .get(`${API_URL}people`)
            .then((res: Response) => res.data.results)
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

interface ListProps {
    name: string;
    url: string;
}

function fetchList(listOfLinks: string[]) {
    const result: ListProps[] = [];
    const promises = [];
    for (let i = 0; i < listOfLinks.length; i++) {
        promises.push(
            axios.get(listOfLinks[i]).then((response: PersonResponse) => {
                result.push({ name: response.data.name, url: listOfLinks[i] });
            }),
        );
    }

    return Promise.all(promises).then(() => {
        return result;
    });
}

export const fetchPersonDetails = (personId: number) => {
    return (dispatch: Dispatch) => {
        return axios
            .get(`${API_URL}people/${personId}`)
            .then(async (res: PersonResponse) => {
                const species = (await fetchList(res.data.species)) || [];
                const planet = (await fetchList([res.data.homeworld])) || [];
                const vehicles = (await fetchList(res.data.vehicles)) || [];
                return Promise.all([species, planet, vehicles]).then(() => {
                    return {
                        ...res.data,
                        homeworld: planet,
                        species,
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
