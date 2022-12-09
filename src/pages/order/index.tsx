import React from 'react';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'components/shared/table';
import { InputField } from 'components/shared/inputField';
import { actionCreator } from 'state';
import { State } from 'state/reducers';
import { fields } from './fields';


export const Order: React.FC = ()=> {

    const dispatch = useDispatch();
    const { searchAction } = bindActionCreators(actionCreator, dispatch);

    const {order} = useSelector((state: State) => state.searchReducer);


    const handelQuery = (value:string) => {
        searchAction(value?.toLowerCase())
    } 

    return (
        <Container>
            <InputField handler={handelQuery}/>
            <Table columns={fields} rows={order}/>
        </Container>
    )
}