import React from 'react';
import { Box, Typography,Stack ,Button} from '@mui/material';
import bannerImage from '../../../shared/assets/images/bannerImage.jpg';
import { useNavigate } from 'react-router-dom';

export default function Banner() {
  const  navigate = useNavigate();
  const handleLogin = () => {
    navigate('/auth/login');
  };

  const handleJobspage = () => {
    navigate('/jobs');
  };
  return (
<Box
        sx={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column', // Stack elements vertically
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 16px',
        }}
      >
        <Typography variant="h1" component="h1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button variant="contained" style={{ backgroundColor: 'red' }} onClick={handleLogin}>Get Started</Button>
        <Button variant="contained" style={{ backgroundColor: 'red' }} onClick={handleJobspage}>View Homes</Button>
        </Stack>
      </Box>
  );
}
