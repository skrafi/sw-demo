import { Reference } from './common';

export interface Person {
    id: number;
    name: string;
    url: string;
    species: string[];
    homeworld: string;
    vehicles: string[];
}

export interface PersonDetailsProps {
    id: number;
    name: string;
    url: string;
    species: string[];
    homeworld: Reference;
    vehicles: Reference[];
}
