import { combineReducers } from 'redux';
import personReducer from './person/personReducer';
import planetReducer from './planet/planetReducer';

export default combineReducers({
    person: personReducer,
    planet: planetReducer,
});
