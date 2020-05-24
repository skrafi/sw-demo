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
    listLoading: boolean;
    personDetails: PersonDetailsProps;
    personLoading: boolean;
}

export interface PlanetState {
    planetList: Planet[];
    listLoading: boolean;
    planetDetails: PlanetDetailsProps;
    planetLoading: boolean;
}

export interface VehicleState {
    vehicleList: Vehicle[];
    listLoading: boolean;
    vehicleDetails: VehicleDetailsProps;
    vehicleLoading: boolean;
}
