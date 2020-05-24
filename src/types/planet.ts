import { Reference } from './common';

export interface Planet {
    id: number;
    name: string;
    url: string;
    species: string[];
    homeworld: string;
    vehicles: string[];
}

export interface PlanetDetailsProps {
    id: number;
    name: string;
    url: string;
    species: Reference[];
    homeworld: Reference;
    vehicles: Reference[];
}
