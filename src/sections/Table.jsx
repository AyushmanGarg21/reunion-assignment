import { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import sampledata from '../../data/sampledata.json';
import {
MRT_GlobalFilterTextField,
MRT_ToggleFullScreenButton,
MRT_ToggleFiltersButton,
MRT_TablePagination,
MRT_TableContainer,
useMaterialReactTable,
} from 'material-react-table';

import {IconButton,Box} from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import SidePanel from '../Sidepanel';

const data = sampledata;

const Table = () => {
   
const columns = useMemo(
    () => [
        {
            accessorKey: 'id',
            header: 'id',
            size: 30,
            groupable: true,
        },
        {
            accessorKey: 'name',
            header: 'Name',
            size: 150,
            groupable: true,
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
            accessorKey: 'createdAt',
            accessorFn: (row) => moment(row.createdAt).format('DD-MMM-YYYY'),
            header: 'CreatedAt',
            size: 200,
            groupable: true,
        },
        {   
            accessorKey: 'updatedAt',
            accessorFn: (row) => moment(row.updatedAt).format('DD-MMM-YYYY'),
            header: 'UpdatedAt',
            size: 200,
            groupable: true,
        },
        {
            accessorKey: 'price',
            header: 'Price',
            size: 100,
            groupable: true,
        },
        {
            accessorKey: 'sale_price',
            header: 'Sale price',
            size: 100,
        }
    ],
    [],
);

const [grpitems, setgrpitems] = useState([]);

const [columnVisibility, setColumnVisibility] = useState({
    id: true,
    name: true,
    category: true,
    subcategory: true,
    createdAt: true,
    updatedAt: true,
    price: true,
    sale_price: true,
  });


  useEffect(() => {
    console.log(grpitems);
    }, [grpitems]);
    



const table = useMaterialReactTable({
    columns,
    data,
    state: { columnVisibility, grouping: grpitems},
    onColumnVisibilityChange: setColumnVisibility,
    onGroupingChange: setgrpitems,
    enableGrouping: true,
    groupedColumnMode: 'reorder',
    enableColumnDragging: false,
    initialState: { 
        showGlobalFilter: true,
        grouping: [],
    },
    muiPaginationProps: {
        showRowsPerPage: false,
        shape: 'rounded',
        variant: 'outlined',
        color: 'primary',
      },
    paginationDisplayMode: 'pages',
    positionToolbarDropZone: 'none', 
});

const [open, setOpen] = useState(false);
const [curntState , setCurntState] = useState("");

const handleClick = (val) => {
    setCurntState(val);
    setOpen(!open);
}



return (
    <div className="table">
            {open && <SidePanel open={open} 
            setOpen={setOpen} 
            curntState={curntState} 
            setgrpitems = {setgrpitems}
            setColumnVisibility = {setColumnVisibility}
            columnVisibility = {columnVisibility}
            />} 

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', justifyContent: 'flex-end', background:'white', padding:'5px'}}>
                <MRT_GlobalFilterTextField table={table} />
                <MRT_ToggleFullScreenButton table={table} />
                <IconButton onClick={() => handleClick("vis")}>
                    <VisibilityOutlinedIcon/>
                </IconButton>
                <IconButton onClick={() => handleClick("swap")}>
                    <SwapVertIcon/>
                </IconButton>
                <IconButton onClick={() => handleClick("filter")}>
                    <FilterListIcon/>
                </IconButton>
                <MRT_ToggleFiltersButton table={table}/>
                <IconButton onClick={() => handleClick("Group")}>
                    <LayersIcon/>
                </IconButton>
            </Box>
            <MRT_TableContainer table={table} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background:'white', padding:'4px'}}>
                <MRT_TablePagination table={table} />
            </Box>
    </div>
);
};

export default Table;
