/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from '@mui/material/Button';
import {Box} from '@mui/material'
import { Slider } from '@mui/base/Slider';



const Filter_Items = () => {

    const [input_name, setInput] = useState('');
      
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', background: 'white', margin: '10px', width: '400px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px', margin: '5px', border: '1px solid lightgrey' }}>
                    <label style={{ padding: '5px' }}>ID</label>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px', margin: '5px', border: '1px solid lightgrey' }}>
                    <label style={{ padding: '5px' }}>Name</label>
                    <input type="text" style={{ padding: '12px', backgroundColor:'white', color:'gray', border: '1px solid lightblue' }} value={input_name} onChange={(e) => setInput(e.target.value)}/>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px', margin: '5px', border: '1px solid lightgrey' }}>
                    <label style={{ padding: '5px' }}>Category</label>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px', margin: '5px', border: '1px solid lightgrey' }}>
                    <label style={{ padding: '5px' }}>Subcategory</label>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px', margin: '5px', border: '1px solid lightgrey' }}>
                    <label style={{ padding: '5px' }}>Created At</label>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px', margin: '5px', border: '1px solid lightgrey' }}>
                    <label style={{ padding: '5px' }}>Updated At</label>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px', margin: '5px', border: '1px solid lightgrey' }}>
                    <label style={{ padding: '5px' }}>Price</label>
                    <Box sx={{ width: 400 }}>
                    
                    </Box>   
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px', margin: '5px', border: '1px solid lightgrey' }}>
                    <label style={{ padding: '5px' }}>Sale Price</label>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column', padding: '5px', margin: '5px' }}>
                    <Button variant="outlined" color="primary" size='large'
                        //onClick={handleShowAll}
                    >
                        Clear All Filters
                    </Button>
                </Box>
            </Box>
        </>
    );
    };

export default Filter_Items;