import { Reference } from './common';

export interface Vehicle {
    id: number;
    name: string;
    url: string;
    vehicleClass: string;
    pilots: string[];
}

export interface VehicleDetailsProps {
    id: number;
    name: string;
    url: string;
    vehicleClass: string;
    pilots: Reference[];
}
