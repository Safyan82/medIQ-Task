import { orderType } from "data";
import { ActionTypes } from 'state/actionTypes';

export interface Action {
    type: ActionTypes.SEARCH ,
    payload?: orderType[],
};

