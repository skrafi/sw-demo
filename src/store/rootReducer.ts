import { combineReducers } from 'redux';
import personReducer from './person/personReducer';
import planetReducer from './planet/planetReducer';
import vehicleReducer from './vehicle/vehicleReducer';

export default combineReducers({
    person: personReducer,
    planet: planetReducer,
    vehicle: vehicleReducer,
});
