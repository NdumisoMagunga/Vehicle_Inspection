import {combineReducers } from 'redux';
import {inspections,items, vehicle, user} from './reducer';

export default combineReducers({
    inspections,
    items,
    vehicle,
    user,
});