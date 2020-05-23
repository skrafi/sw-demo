import { Person } from './person';

export interface GlobalState {
    person: PersonState;
}

export interface PersonState {
    personList: Person[];
}
