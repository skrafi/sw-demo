import { Reference } from './common';

export interface Planet {
    id: number;
    name: string;
    url: string;
    population: number;
    residents: string[];
}

export interface PlanetDetailsProps {
    id: number;
    name: string;
    url: string;
    population: number;
    residents: Reference[];
}
