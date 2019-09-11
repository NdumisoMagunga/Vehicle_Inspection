import {
    GET_ITEM,
    GET_VEHICLE,
    GET_USER,
} from './type';
const baseUrl = 'http://localhost:88';

export const fetchItem = () => async dispatch => {
    const res = await fetch(baseUrl +'/api/item', {credentials: 'include'});
    const data = await res.json();
    dispatch({type: GET_ITEM, payload: data});
};

export const fetchUser = () => async dispatch => {
    const res = await fetch(baseUrl +'/user/user', {credentials: 'include'});
    const data = await res.json();
    dispatch({type: GET_USER, payload: data});
};

export const fetchVehicle = () => async dispatch => {
    const res = await fetch(baseUrl +'/api/vehicle', {credentials: 'include'});
    const data = await res.json();
    dispatch({type: GET_VEHICLE, payload: data});
};

