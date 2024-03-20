/* eslint-disable react/prop-types */

import {useState} from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 400,
    },
  },
};

const names = [
    'category',
    'subcategory',
  ];

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}



const Group = ({setgrpitems}) => {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    const handleClear = () => {
        setPersonName([]);
        setgrpitems([]);
    };

    return (
        <Box sx={{ display: 'flex', gap : '20px',flexDirection : 'column', background:'white', padding:'5px',margin:'10px' , width:'400px'}}>
        <FormControl sx={{ display: 'flex',gap : '5px'}}>
        <InputLabel id="demo-multiple-chip-label">Group</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ display: 'flex', gap : '5px',flexDirection : 'column'}}>
        <Button variant="outlined" color="primary" size='large' 
            onClick={handleClear}
        >
                Clear Grouping
        </Button>
        <Button variant="contained" color="primary" size='large'
            onClick={() => setgrpitems(personName)}
        >
                Apply Grouping
        </Button>   
      </Box>
    </Box>
    );
};

export default Group;