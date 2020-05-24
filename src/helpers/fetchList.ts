import { PersonResponse } from '../types/response';
import axios from 'axios';

interface ListProps {
    name: string;
    url: string;
}

export function fetchList(listOfLinks: string[]) {
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
