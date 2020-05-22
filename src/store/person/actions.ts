import { Person } from '../../types/person';

interface GetPersonListAction {
    type: string;
}

interface UpdatePersonListAction {
    type: string;
    payload: Person[];
}

export type PersonAction = GetPersonListAction | UpdatePersonListAction;
