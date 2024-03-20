/* eslint-disable react/prop-types */

import {useState} from 'react';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import {Box} from '@mui/material'




const HideItems = ({setOpen ,columnVisibility, setColumnVisibility}) => {
    const initialState = {
        id: true,
        name: true,
        category: true,
        subcategory: true,
        createdAt: true,
        updatedAt: true,
        price: true,
        sale_price: true,
      };
    const [state, setState] = useState(columnVisibility);

      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

        const handleShowAll = () => {
            setState(initialState);
            setColumnVisibility(initialState);
            setOpen(false);
        };

        const handleApply = () => {
            setColumnVisibility(state);
            setOpen(false);
        };

    return (
        <Box sx={{ display: 'flex',flexDirection : 'column',background:'white',margin:'10px' , width:'400px'}}>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>ID</label>
            <Switch checked={state.id} onChange={handleChange} name="id" />
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Name</label>
            <Switch checked={state.name} onChange={handleChange} name="name" />
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Category</label>
            <Switch checked={state.category} onChange={handleChange} name="category" />
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Subcategory</label>
            <Switch checked={state.subcategory} onChange={handleChange} name="subcategory" />
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Created At</label>
            <Switch checked={state.createdAt} onChange={handleChange} name="createdAt" />
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Updated At</label>
            <Switch checked={state.updatedAt} onChange={handleChange} name="updatedAt" />
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Price</label>
            <Switch checked={state.price} onChange={handleChange} name="price" />
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Sale Price</label>
            <Switch checked={state.sale_price} onChange={handleChange} name="sale_price" />
        </Box>
        <Box sx={{ display: 'flex', gap : '10px',flexDirection : 'column' ,padding:'5px',margin:'5px'}}>
        <Button variant="outlined" color="primary" size='large' 
            onClick={handleShowAll}
        >
                Show all columns
        </Button>
        <Button variant="contained" color="primary" size='large'
            onClick={handleApply}
        >
                Apply
        </Button>   
      </Box>
        </Box>
    );
};

export default HideItems;