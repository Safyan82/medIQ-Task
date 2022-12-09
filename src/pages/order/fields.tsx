import { GridColDef } from 'components/shared/table/interface';
import { GridValueGetterParams, GridColumnHeaderParams } from '@mui/x-data-grid';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const getcolor = (status:string) =>{
    switch(status){
        case 'UNVERIFIED':
            return 'grey';

        case 'REFUNDED':
            return 'yellow';

        case 'CANCELLED':
            return 'red';

        case 'VERIFIED':
            return 'skyblue';

        case 'FULFILLED':
            return 'green';

        default:
            return 'white';
    }
}

export const fields: GridColDef[] = [
    {
        field:'orderID',
        headerName: 'Order #',
        renderHeader: (params: GridColumnHeaderParams) => (
            <b>{params.colDef.headerName}</b>
        )
    },
    {
        field:'orderStatus',
        headerName: 'Order status',
        width: 155,
        renderHeader: (params: GridColumnHeaderParams) => (
            <b>{params.colDef.headerName}</b>
        ),
        renderCell: (params: GridValueGetterParams) =>(
           <><span style={{height: '14px', width: '14px', backgroundColor: getcolor(params.row.orderStatus), borderRadius:'50%', marginRight:'5%' }}></span>  {params.row.orderStatus} </>
        )
    },
    {
        field:'companyName',
        headerName: 'Company',
        width: 155,
        renderHeader: (params: GridColumnHeaderParams) => (
            <b>{params.colDef.headerName}</b>
        )

    },
    {
        field:'customerName',
        headerName: 'Customer',
        width: 155,
        renderHeader: (params: GridColumnHeaderParams) => (
            <b>{params.colDef.headerName}</b>
        ),
        renderCell: (params: GridValueGetterParams) =>
          <b> {params.row.customerName} </b>,

    },
    {
        field:'purDate',
        headerName: 'Purchase date',
        width: 165,
        renderHeader: (params: GridColumnHeaderParams) => (
            <b>{params.colDef.headerName}</b>
        ),
        
        renderCell: (params: GridValueGetterParams) =>(
            <> <CalendarTodayIcon style={{fontSize:'18px', color:'skyblue', marginRight: '5%'}} />  {params.row.purDate} </>
         )


    },
    {
        field:'fulfillDate',
        headerName: 'Fulfilled date',
        width: 155,
        renderHeader: (params: GridColumnHeaderParams) => (
            <b>{params.colDef.headerName}</b>
        ),
        
        renderCell: (params: GridValueGetterParams) =>(
            <> {params.row.fulfillDate && <CalendarTodayIcon style={{fontSize:'18px', color:'skyblue', marginRight: '5%'}} /> } {params.row.fulfillDate}  </>
         )

    },
    {
        field:'invoiceStatus',
        headerName: 'Invoice status',
        width: 165,
        renderHeader: (params: GridColumnHeaderParams) => (
            <b>{params.colDef.headerName}</b>
        )

    },
    {
        field:'amount',
        headerName: 'Amount',
        renderHeader: (params: GridColumnHeaderParams) => (
            <b>{params.colDef.headerName}</b>
        ),
        renderCell: (params: GridValueGetterParams) =>
          <b>{params.row.currency || ''} {params.row.amount || ''}</b>,
    },
];