import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AVAILABLE_TORS_HEADER } from '../../../config/Pages/appointmentPage/appointment';

import ScheduleDialog from './ScheduleDialog';
const Appointment = () => {
  // get available torims
  const availableTors = ['10:30', '14:30'];

  return (
    <div className='allPage'>
      <div className='appointment-section'>
        <Container component='main' maxWidth='xs'>
          <Typography component='h1' variant='h5' fontSize='bold'>
            {AVAILABLE_TORS_HEADER}
          </Typography>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid black',
              borderRadius: '10px',
              padding: '5px',
            }}
          >
            {availableTors.map((availableTor) => {
              return <ScheduleDialog availableTor={availableTor} />;
            })}
          </Box>
        </Container>
      </div>
    </div>
  );
};
export default Appointment;
