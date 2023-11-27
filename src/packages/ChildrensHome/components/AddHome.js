import React from 'react'
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import call from '../../../core/services/http';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormProvider, RHFCheckbox, RHFTextField } from '../../../shared/components/hook-form';

import { useForm } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';

function AddHome() {
  const navigate = useNavigate();

  const HomeSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    address: Yup.string().required('required'),
    capacity: Yup.string().required('required'),
    director_name: Yup.string().required('required'),
    contact_number: Yup.string().required('required'),
    email: Yup.string().required('required'),
    established_date: Yup.string().required('required'),
    certification_number: Yup.string().required('required'),
  });

  const defaultValues = {
    name: '',
    address: '',
    capacity:'',
    director_name: '',
    contact_number: '',
    email: '',
    established_date: '',
    certification_number: '',
    navigate,
  };

  const methods = useForm({
    resolver: yupResolver(HomeSchema),
    defaultValues,
  });
  const { handleSubmit, getValues } = methods;

  const onSubmit = async () => {
    const payload = getValues();
    //send
 
  };

  const registerHome = async (e) => {
    console.log('clicked!!!!!!!!!!!!!!!!!!!!!');
    const { name, address,capacity,director_name,contact_number,email, established_date,certification_number} = getValues();

    try {
      const payload = {
        name,
        address,
        capacity,
        director_name,
        contact_number,
        email,
        established_date,
        certification_number,
      };

      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found.');
        return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
  };
      const res = await call('post', 'childrens_home/api/v1/childrens_home/', payload,{ headers });
      if (res.data.status) {
        toast.success(res.message, { autoClose: 3000 });
        navigate('/childrens-home');
      } else {
        // Handle other response statuses
         
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  



  return (
    <Card style={{ maxWidth: '800px', margin: '30px auto 0' }}>
      <div style={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Add Home
      </Typography> 
    </div>
     <ToastContainer theme="colored" />
        <CardContent>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFTextField name="name" label="Name" />
            <RHFTextField name="address" label="Address" />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFTextField name="capacity" label="Capacity" />
            <RHFTextField name="director_name" label="Director Name" />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFTextField name="contact_number" label="Contact Number" />
            <RHFTextField name="email" label="Email" />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFTextField name="established_date" label="Established Date" />
            <RHFTextField name="certification_number" label="Certification Number" />
          </Stack>
      </Stack>
      <LoadingButton fullWidth size="large" onClick={registerHome} variant="contained"  style={{ marginTop: '16px' }} >
            Add Home
          </LoadingButton>
      </FormProvider>
        </CardContent>
    </Card>
  )
}

export default AddHome