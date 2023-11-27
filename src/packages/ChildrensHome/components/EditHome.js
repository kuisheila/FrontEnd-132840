import React from 'react'
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormProvider, RHFCheckbox, RHFTextField } from '../../../shared/components/hook-form';
import { ToastContainer, toast } from 'react-toastify';


 export default function EditHome() {
   return (
    <Card style={{ maxWidth: '800px', margin: '30px auto 0' }}>
    <div style={{ textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>
      Add Home
    </Typography> 
  </div>
   <ToastContainer theme="colored" />
      <CardContent>
      <FormProvider >
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
 