import {
    GET_ITEM,
    GET_VEHICLE,
    GET_USER,
} from '../actions/type';

export const user = (state = [], action)=>{
    switch(action.type){
        case GET_USER:
            return action.payload;
        default:
            return state;
    }
};
export const items = (state = [], action) => {
    switch(action.type){
        case GET_ITEM:
            return action.payload;
            default:
                return state;
    }
};

export const vehicle = (state = [], action) => {
    switch(action.type){
        case GET_VEHICLE:
            return action.payload;
            default:
                return state;
    }
}
