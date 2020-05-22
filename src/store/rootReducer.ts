import { combineReducers } from 'redux';
import personReducer from './person/personReducer';

export default combineReducers({
    person: personReducer,
});
