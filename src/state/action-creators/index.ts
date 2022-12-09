import { ActionTypes } from "state/actionTypes";
import { Dispatch } from "redux";
import { Action } from "state/actions";
import { orderData } from "data";


export const searchAction = (query:string) =>{
    
    const searchResult = orderData.filter((order)=> order.companyName?.toLowerCase().indexOf(query) !== -1 || order.customerName?.toLowerCase().indexOf(query) !== -1 ||  order.orderID?.indexOf(query) !== -1 )
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionTypes.SEARCH,
            payload: searchResult,
        });
    }

}