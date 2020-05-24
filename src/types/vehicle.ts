import { Reference } from './common';

export interface Vehicle {
    id: number;
    name: string;
    url: string;
    species: string[];
    homeworld: string;
    vehicles: string[];
}

export interface VehicleDetailsProps {
    id: number;
    name: string;
    url: string;
    species: Reference[];
    homeworld: Reference;
    vehicles: Reference[];
}
