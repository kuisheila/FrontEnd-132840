import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import call from '../../../core/services/http';
// import Navbar from 'src/packages/Home/components/Navbar';
//import Footer from 'src/packages/Home/components/Footer';
import { Card, CardContent, Stack, Typography, Grid} from '@mui/material';
 

export default function SingleHome() {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    console.log('--------------product wasee', product)
 
  
    const getProduct = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('-----------------------------------------------> Nafika hapa ', token)
        if (!token) {
          console.error('No token found.');
          return;
        }
  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
  
        const response = await call('get', `/childrens_home/api/v1/childrens_home/${productId}/`, { headers });
  
        console.log('API Response:', response.data);
  
        const responseData = response.data;  
        console.log('--------------------> niko hapa',responseData)
  
        if (responseData) {
          setProduct(responseData.data);
        } else {
          console.error('API returned unsuccessful response.');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    useEffect(() => {
      getProduct(productId);
    }, [productId]);
  
    console.log('Product ID:', productId);

  return (
    // <Navbar/>
 <>

      <div>
      {product && Object.keys(product).length > 0 && (
      <Card sx={{ maxWidth: 400, margin: '0 auto', marginTop: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div" align="center">
          {product.name}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Address:</Typography>
            <Typography variant="body1">{product.address}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Capacity:</Typography>
            <Typography variant="body1">{product.capacity}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Director Name:</Typography>
            <Typography variant="body1">{product.director_name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Contact Number:</Typography>
            <Typography variant="body1">{product.contact_number}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Email:</Typography>
            <Typography variant="body1">{product.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Established Date:</Typography>
            <Typography variant="body1">{product.established_date}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Certification Number:</Typography>
            <Typography variant="body1">{product.certification_number}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    )}
    </div>

 </>
  );
}
