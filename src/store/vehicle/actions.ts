import { Vehicle } from '../../types/vehicle';

interface GetVehicleListAction {
    type: string;
}

interface UpdateVehicleListAction {
    type: string;
    payload: Vehicle[];
}

export type PersonAction = GetVehicleListAction | UpdateVehicleListAction;
