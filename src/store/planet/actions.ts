import { Planet } from '../../types/planet';

interface GetPlanetListAction {
    type: string;
}

interface UpdatePlanetListAction {
    type: string;
    payload: Planet[];
}

export type PersonAction = GetPlanetListAction | UpdatePlanetListAction;
