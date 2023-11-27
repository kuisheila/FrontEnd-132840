import React from 'react';
import { Box, Typography } from '@mui/material';


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        textAlign: 'center',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Childrens. All rights reserved.
      </Typography>
    </Box>
  );
}
