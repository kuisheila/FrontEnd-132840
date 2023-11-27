import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';
import call from '../../../core/services/http';
import { useNavigate,useParams } from 'react-router-dom';

const EcommerceCard = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
 
  
    useEffect(() => {
      console.log('useEffect called'); 
      getProducts();
    }, []);
  
    const getProducts = async () => {
      console.log('getProducts called'); 
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found.');
          return;
        }
    
       
        const headers = {
          Authorization: `Bearer ${token}`,
        };
    
        console.log('Headers:', headers);
    
        const res = await call('get', '/products/api/v1/products/', { headers });
    
        console.log('Response:', res.data);
    
        if (res.data) {
          setProducts(res.data.data);
        } else {
          console.error('API returned unsuccessful response.');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

  return (
    <div>
            <Grid container >
    {products.map((product) => (
      <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 300, margin: '16px' }}>
          <CardMedia
            component="img"
            height="200"
             image={`http://localhost:8000${product.image}`}
            alt={product.name}
            onClick={() => navigate(`/product/${product.id}`)}
            style={{ cursor: 'pointer' }}
          />
          <CardContent
          >
            <Typography gutterBottom variant="h6" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="h6" color="error">
              ${product.price}
            </Typography>
            <Button variant="contained" color="error">
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
    </div>
  );
};

 

export default EcommerceCard;
