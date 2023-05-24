import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useHistory } from 'react-router-dom';

import {
  HEADER,
  INPUT_LABEL,
  BUTTON_LABEL,
} from '../../../config/Pages/verifyPage/verify';

const SignIn = () => {
  const [code, setCode] = useState('');

  const history = useHistory();

  const verifyCode = (e) => {
    if (code) {
      history.push('/appointment');
    } else {
      alert("Code isn't valid");
    }
  };

  return (
    <div className='allPage'>
      <div className='login-section'>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
              <FingerprintIcon />
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
                onChange={(e) => setCode(e.target.value)}
                label={INPUT_LABEL}
                autoFocus
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => verifyCode(e)}
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
