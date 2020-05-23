import { PersonList } from '../components/PersonList/PersonList';
import { PlanetList } from '../components/PlanetList/PlanetList';
import { TransportList } from '../components/TransportList/TransportList';
import { PersonDetails } from '../components/PersonDetails/PersonDetails';

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
        path: '/transports',
        label: 'Transports',
        component: TransportList,
    },
];

export const PRIVATE_ROUTES = [
    {
        path: '/people/:id',
        component: PersonDetails,
    },
];
