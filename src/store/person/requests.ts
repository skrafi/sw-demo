import axios from 'axios';
import { API_URL } from '../../constants/endpoints';
import { Response } from '../../types/response';
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
