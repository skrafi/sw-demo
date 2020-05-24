import { Person, PersonDetailsProps } from './person';

export interface GlobalState {
    person: PersonState;
}

export interface PersonState {
    personList: Person[];
    listLoading: boolean;
    personDetails: PersonDetailsProps;
    personLoading: boolean;
}
