import React from 'react';
import { DataGrid, } from '@mui/x-data-grid';
import { GridColDef } from 'components/shared/table/interface';
import { orderType } from 'data';


interface Props {
    rows: orderType[],
    columns: GridColDef[]
}

export const Table: React.FC<Props> = ({rows, columns})=>{
    return (
        <div style={{ height: 400 }}>
            <DataGrid
                rows={rows}
                columns={columns}  
                getRowId={() => Math.floor(Math.random() * 100000000)}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    )
}