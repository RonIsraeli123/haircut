import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import validator from 'validator';
import { useHistory } from 'react-router-dom';

import {
  HEADER,
  INPUT_LABEL,
  BUTTON_LABEL,
} from '../../../config/Pages/loginPage/login';

// import '../../../style/mainComponents/login.css';

const SignIn = () => {
  const [email, setEmail] = useState('');

  const history = useHistory();

  const sendEmail = (e) => {
    if (validator.isEmail(email)) {
      alert('mail sent successfully! check your inbox :)');
      history.push('/verify');
    } else {
      alert("mail isn't valid");
    }
  };

  return (
    <div className='allPage'>
      <div className='login-section'>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              {HEADER}
            </Typography>
            <div>
              <TextField
                margin='normal'
                fullWidth
                type='email'
                name='user_email'
                onChange={(e) => setEmail(e.target.value)}
                label={INPUT_LABEL}
                autoFocus
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => sendEmail(e)}
              >
                {BUTTON_LABEL}
              </Button>
            </div>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
