import * as Yup from 'yup';
import { useState,useHistory } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import call from '../../../../core/services/http';
// @mui
import { Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ToastContainer, toast } from 'react-toastify';

import { Box } from '@mui/system';
import { FormProvider, RHFCheckbox, RHFTextField } from '../../../components/hook-form';
import Iconify from '../../../components/Iconify';
//
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
 

  const token = localStorage.getItem('token');
  console.log('------------------------------->TOKEN',token);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Please provide a valid emaill'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    login: '',
    password: '',
    navigate,
  };

  // handle login
  const login = async (e) => {
    const { email, password } = getValues();
    try {
      const payload = {
        email,
        password,
      };
      const res = await call('post', '/authentication/api/v1/login/', payload);
      if (res.data) {
        const token = res.data.access_token; // Assuming the token is returned in the response
        localStorage.setItem('token', token);
        toast.success('Login successful');
        
        // Redirect to the shop page
        navigate('/childrens-home');
        
      } else {
        toast.error('something went wrong try later');
      }
    } catch (error) {
      console.log(error,'================================> Error')
      toast.error('something went wrong try later');
    }
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const { handleSubmit, getValues } = methods;

  // Formik will show submitting loader automatically
  const onSubmit = async () => {
    const payload = getValues();
    //send
 
  };
  //
  return (
    <div>
      <Box sx={{ m: 2 }}>
      <ToastContainer theme="colored" />
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <RHFTextField name="email" label="Email Address" />
            <RHFTextField
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <RHFCheckbox name="remember" label="Remember me" />
            <Link to="/auth/forgot-password">Forgot password?</Link>
          </Stack>
          <LoadingButton
            fullWidth
            size="large"
            onClick={login}
            type="submit"
            variant="contained"
          >
            Login
          </LoadingButton>

       
        </FormProvider>
      </Box>
    </div>
  );
}
