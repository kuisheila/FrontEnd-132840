import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import call from '../../../../core/services/http';

import { ToastContainer, toast } from 'react-toastify';
// @mui
import { Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const { handleSubmit, getValues } = methods;

  // Register
  const register = async (e) => {
    console.log('clicked!!!!!!!!!!!!!!!!!!!!!');
    const { first_name, last_name, email, password } = getValues();
    try {
      const payload = {
        first_name,
        last_name,
        email,
        password,
      };
      const res = await call('post', 'authentication/api/v1/register/', payload);
      if (res.data.status) {
        navigate('/auth/login');
        toast.success(res.data.message, { autoClose: 3000 });
      } else {
        // Handle other response statuses
        console.log('Failed to send password reset OTP');
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ToastContainer theme="colored" />
      <FormProvider methods={methods} onSubmit={handleSubmit(register)}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFTextField name="first_name" label="First name" />
            <RHFTextField name="last_name" label="Last name" />
          </Stack>
          <RHFTextField name="email" label="Email address" />

          <RHFTextField
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <LoadingButton fullWidth size="large" onClick={register} variant="contained">
            Register
          </LoadingButton>
        </Stack>
      </FormProvider>
    </div>
  );
}
