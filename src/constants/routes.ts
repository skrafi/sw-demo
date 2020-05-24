import { PersonList } from '../components/PersonList/PersonList';
import { PlanetList } from '../components/PlanetList/PlanetList';
import { VehicleList } from '../components/VehicleList/VehicleList';
import { PersonDetails } from '../components/PersonDetails/connect';
import { PlanetDetails } from '../components/PlanetDetails/connect';
import { VehicleDetails } from '../components/VehicleDetails/connect';

export const ROUTES = [
    {
        path: '/people',
        label: 'People',
        component: PersonList,
    },
    {
        path: '/planets',
        label: 'Planets',
        component: PlanetList,
    },
    {
        path: '/vehicles',
        label: 'Vehicles',
        component: VehicleList,
    },
];

export const PRIVATE_ROUTES = [
    {
        path: '/people/:id',
        component: PersonDetails,
    },
    {
        path: '/planets/:id',
        component: PlanetDetails,
    },
    {
        path: '/vehicles/:id',
        component: VehicleDetails,
    },
];
