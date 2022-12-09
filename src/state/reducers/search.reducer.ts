import { orderData, orderType } from "data"
import { Action } from "state/actions";
import { ActionTypes } from 'state/actionTypes';

interface orderState {
    order: orderType[];
}

const initalState:orderState  = {
    order: [...orderData],
} ;


export const searchReducer = (state=initalState, action:Action) => {
    switch(action.type){
        case ActionTypes.SEARCH:
            return { ...state, order: action?.payload };

        default:
            return state;
    }
};