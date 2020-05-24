import { Person, PersonDetailsProps } from './person';
import { Planet, PlanetDetailsProps } from './planet';

export interface GlobalState {
    person: PersonState;
    planet: PlanetState;
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
