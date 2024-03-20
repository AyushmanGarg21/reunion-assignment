/* eslint-disable react/prop-types */
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, IconButton,Box} from '@mui/material';
import Group from './components/GroupItems';
import HideItems from './components/Hideitems';



const SidePanel = ({open , setOpen , curntState , setgrpitems ,setColumnVisibility ,columnVisibility}) => {

    return (
        <div>
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                transitionDuration= { 500 }
                variant="temporary"
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black transparent background
                }}
            >
            <Box sx={{ display: 'flex',flexDirection: 'row', background:'white', padding:'5px'}}>

                {curntState === 'Group' &&
                <Box sx={{ display: 'flex', flexDirection:'column'}}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' , padding:'4px'}}>
                <h4>Create Group</h4>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <Group setgrpitems = {setgrpitems}/>
                </Box>
                 }

                {curntState === 'swap' && 
                <Box sx={{ display: 'flex', flexDirection:'column'}}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' , padding:'4px'}}>
                <h4>Sorting Options</h4>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                    
                </Box>
                }

                {curntState === 'filter' && 
                <Box sx={{ display: 'flex', flexDirection:'column'}}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' , padding:'4px'}}>
                <h4>Filters</h4>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                    
                </Box>
                }

                {curntState === 'vis' &&
                <Box sx={{ display: 'flex', flexDirection:'column'}}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' , padding:'4px'}}>
                <h4>Show/Hide columns</h4>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                    <HideItems setOpen = {setOpen} columnVisibility = {columnVisibility} setColumnVisibility={setColumnVisibility}/>
                </Box>
                }
            </Box>
            </Drawer>
        </div>
    );
};

export default SidePanel;
