/* eslint-disable react/prop-types */
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {useState} from 'react';
import Button from '@mui/material/Button';
import {Box, IconButton} from '@mui/material'



const SortItems = ({table , setSorting}) => {

    return (
        <Box sx={{ display: 'flex',flexDirection : 'column',background:'white',margin:'10px' , width:'400px'}}>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>ID</label>
            <IconButton onClick={() => setSorting([{ id: 'id', desc: false }])}>
                <SwapVertIcon/>
            </IconButton>
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Name</label>
            <IconButton onClick={() => setSorting([{ id: 'name', desc: false }])}>
                <SwapVertIcon/>
            </IconButton>
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Category</label>
            <IconButton onClick={() => setSorting([{ id: 'category', desc: false }])}>
                <SwapVertIcon/>
            </IconButton>
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Subcategory</label>
            <IconButton onClick={() => setSorting([{ id: 'subcategory', desc: false}])}>
                <SwapVertIcon/>
            </IconButton>
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Created At</label>
            <IconButton onClick={() => setSorting([{ id: 'createdAt', desc: false }])}>
                <SwapVertIcon/>
            </IconButton>
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Updated At</label>
            <IconButton onClick={() => setSorting([{ id: 'updatedAt', desc: false }])}>
                <SwapVertIcon/>
            </IconButton>
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Price</label>
            <IconButton onClick={() => setSorting([{ id: 'price', desc: false }])}>
                <SwapVertIcon/>
            </IconButton>
        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between', padding:'10px',margin:'5px' ,border: '1px solid lightgrey'}}>
            <label style={{padding:'5px'}}>Sale Price</label>
            <IconButton onClick={() => setSorting([{ id: 'sale_price', desc: false }])}>
                <SwapVertIcon/>
            </IconButton>
        </Box>
        <Box sx={{ display: 'flex', gap : '10px',flexDirection : 'column' ,padding:'5px',margin:'5px'}}>
        <Button variant="outlined" color="primary" size='large' 
            onClick={() => table.resetSorting(true)}
        >
                Clear Sort
        </Button>
      </Box>
        </Box>
    );
    };

export default SortItems;