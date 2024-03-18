import { useMemo } from 'react';
import moment from 'moment';
import sampledata from '../data/sampledata.json';
import {

MaterialReactTable,
useMaterialReactTable,
} from 'material-react-table';

const data = sampledata;

const Table = () => {
const columns = useMemo(
    () => [
        {
            accessorKey: 'id',
            header: 'id',
            size: 30,
        },
        {
            accessorKey: 'name',
            header: 'Name',
            size: 150,
        },
        {
            accessorKey: 'category',
            header: 'Category',
            size: 120,
            groupable: true, // Enable grouping by category
        },
        {
            accessorKey: 'subcategory',
            header: 'Subcategory',
            size: 120,
            groupable: true, // Enable grouping by subcategory
        },
        {
            accessorFn: (row) => moment(row.createdAt).format('DD-MMM-YYYY'),
            header: 'CreatedAt',
            size: 200,
        },
        {
            accessorFn: (row) => moment(row.updatedAt).format('DD-MMM-YYYY'),
            header: 'UpdatedAt',
            size: 200,
        },
        {
            accessorKey: 'price',
            header: 'Price',
            size: 100,
        },
        {
            accessorKey: 'sale_price',
            header: 'Sale price',
            size: 100,
        }
    ],
    [],
);

const table = useMaterialReactTable({
    columns,
    data,
    enableGrouping: true, // Enable grouping feature
    enableFacetedValues: true,
    enableColumnOrdering: false,
    muiPaginationProps: {
        showRowsPerPage: false,
        shape: 'rounded',
      },
    paginationDisplayMode: 'pages',
});

return (
    <div className="table"> 
            <MaterialReactTable table={table} />
    </div>
);
};

export default Table;
