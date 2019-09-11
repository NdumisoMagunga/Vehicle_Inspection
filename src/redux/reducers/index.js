import {combineReducers } from 'redux';
import {items, vehicle, user} from './reducer';

export default combineReducers({
    items,
    vehicle,
    user,
});