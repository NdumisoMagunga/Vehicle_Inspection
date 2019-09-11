// action plain js object, type prop some change,

// payload context around the content we wanna make
// action describe some change we wanna make to the
// data inside our app

// dispatch function => take an action and make a copy of it

// reducers takes an action and data and process the action
// and make some change to the data and return it

// state in redux => central repository of all information
// created by the reducer

// poeple dropping off a form
const createPolicy = (name, amount) => {
    return {
        //action (aform in our alalogy)
        type: 'CREATE_POLICY',
        payload: {
            name,
            amount
        }
    };
};

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    };
};

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name,
            amountOfMoneyToCollect
        }
    };
};

// reducers (departments)
const claimHistory= (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        //WE CARE ABOUT THIS ACTION (FORM)
        return [...oldListOfClaims, action.payload]; // creating a new array
    }
    // we don't care about the action (form)
    return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }

    return bagOfMoney;
};

// this looks like what i wanna do
const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => 
                name !== action.payload.name);
    }
    return listOfPolicies;
};

// the store => is a collection of different reducers and actions
import { combineReducers, createStore} from 'redux';

const ourDepartments = combineReducers({
    accounting: accounting,
    claimHistory: claimHistory,
    policies: policies
});

const store = createStore(ourDepartments);


store.dispatch(createPolicy('alex', 20));

console.log(store.getState())