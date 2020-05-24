import { Person, PersonDetailsProps } from './person';
import { Planet, PlanetDetailsProps } from './planet';
import { Vehicle, VehicleDetailsProps } from './vehicle';

export interface GlobalState {
    person: PersonState;
    planet: PlanetState;
    vehicle: VehicleState;
}

export interface PersonState {
    personList: Person[];
    personListCount: number;
    listLoading: boolean;
    personDetails: PersonDetailsProps;
    personLoading: boolean;
}

export interface PlanetState {
    planetList: Planet[];
    planetListCount: number;
    listLoading: boolean;
    planetDetails: PlanetDetailsProps;
    planetLoading: boolean;
}

export interface VehicleState {
    vehicleList: Vehicle[];
    vehicleListCount: number;
    listLoading: boolean;
    vehicleDetails: VehicleDetailsProps;
    vehicleLoading: boolean;
}
