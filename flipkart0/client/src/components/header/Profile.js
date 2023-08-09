

import { Box, Menu, MenuItem, Typography,styled } from '@mui/material'
import React, { useState } from 'react'
// ---icon---
import { PowerSettingsNew } from '@mui/icons-material';

const Menu_component = styled(Menu)`
    margin-top:10px;
`;
const Profile = ({account}) => {
    const [open,setOpen] = useState(false);
    const handleMenu =(e)=>{
        setOpen(e.currentTarget);
    }
    const handleClose =(e)=>{
        setOpen(false);
    }
  return (
    <Box sx={{cursor:'pointer'}}>
    <Box style={{cursor:'pointer'}}>
        <Typography onClick={handleMenu}  variant='h6' >{account}</Typography>
    </Box>
      <Menu_component
      id="basic-menu"
      anchorEl={open}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      >
        <MenuItem onClick={handleClose}><PowerSettingsNew color='primary' font='small' ></PowerSettingsNew>Logout</MenuItem>
      </Menu_component> 
    </Box>
  )
}

export default Profile