import axios from 'axios';

const URL = 'https://swapi.dev/';

export const request = {
    get: (url: string) => axios.get(`${URL}${url}`),
};
