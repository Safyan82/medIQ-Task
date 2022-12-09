export interface GridColDef {
    field: string,
    headerName: string,
    width?: number,
    description?: string,
    sortable?: boolean,
    type?: string,
    valueGetter?: any,
    renderHeader?: any,
    renderCell?: any,
}