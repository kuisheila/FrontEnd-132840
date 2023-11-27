import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
 
 

export default function Navbar() {
    const  navigate = useNavigate();

    const handleLogin = () => {
        navigate('/auth/login');
      };

    const handleShop = () => {
      navigate('/shop');
    };

    const handleChildrensHome = () => {
      navigate('/childrens-home')
    }

    const handleDonors = () => {
      navigate('/donors')
    }

    
  return (
    <AppBar position="static" sx={{ backgroundColor: '#dc143c' }}>

      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        
        <Button color="inherit">About</Button>
        <Button color="inherit" onClick={handleChildrensHome}>Childrens Home</Button>
        <Button color="inherit" onClick={handleDonors}>Donors</Button>
        <Button color="inherit"  onClick={handleLogin}>Login</Button>
      </Toolbar>
      
    </AppBar>
  );
}
