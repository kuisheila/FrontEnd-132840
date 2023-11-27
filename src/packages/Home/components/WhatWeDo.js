import React from 'react'
import educationImage from '../../../shared/assets/images/education.jpg';
import { Box,Typography,Button,CardActionArea, CardActions,Card,CardContent,CardMedia} from '@mui/material';


export default function WhatWeDo() {
  const CardsContainer = () => {
    const cardStyle = {
      maxWidth: 345,
      margin: '10px',
     } // Add some margin between cards
    };
  
  
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

  return (
    <div>
      <Box textAlign="center">
      <Typography variant="h2" component="h2" style={{ fontSize: '2rem', paddingTop: '1rem' }}>
        What We Do
      </Typography>
       <Box display="flex" justifyContent="center" alignItems="center" >
      <Box display="flex" flexDirection={{  xs: 'column', md: 'row'  }} >
      <Card sx={{ maxWidth: 345, margin: '8px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={educationImage}
          alt="education image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Service Jobs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          We Care
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345,  margin: '8px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={educationImage}
          alt="education image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            We NatureCareer 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345,  margin: '8px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={educationImage}
          alt="education image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Education
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
      </Box>
      </Box>
    </Box>
    </div>
  )
}
