import { Person } from './person';
import { Planet } from './planet';
import { Vehicle } from './vehicle';

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

export interface PlanetResponse {
    data: Planet;
}

export interface VehicleResponse {
    data: Vehicle;
}
