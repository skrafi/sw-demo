import { Person } from './person';
import { Planet } from './planet';

interface ResponseData {
    count: number;
    next: string;
    previous: string;
    results: Person[] | Planet[];
}

export interface Response {
    data: ResponseData;
}

export interface PersonResponse {
    data: Person;
}
