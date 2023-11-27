import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import call from '../../../core/services/http';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import Navbar from 'src/packages/Home/components/Navbar';
import Footer from 'src/packages/Home/components/Footer';

export default function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  console.log('===================================>Products', product)

  // useEffect(() => {
    
  // }, [productId]);

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
      console.log('-----------------------------------------------> Nafika hapa Headers ', headers)

      console.log('Headers:', headers); // Log headers to check if they're correct

      const response = await call('get', `/products/api/v1/product/${productId}`, { headers });

      console.log('API Response:', response.data); // Log the API response

      const responseData = response.data; // Assuming your API response structure

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
  }, [])

   

 

  console.log('Product ID:', productId); // Log the extracted product ID

  return (
    // <Navbar/>
 <>
 <Navbar/>
      <div>
      <Card sx={{ maxWidth: 300, margin: '16px' }}>
        <CardMedia
          component="img"
          height="200"
          image={`http://localhost:8000${product.image}`}
          alt={product.name}
        />
        <CardContent>
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
    </div>
    <Footer/>
 </>
  );
}
