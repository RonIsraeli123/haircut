import React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import ScheduleDialog from './ScheduleDialog';

const BarberAvailabilityTime = (props) => {
  return (
    <div>
      {props.chosenBarberDetails['barberName']}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid black',
          borderRadius: '10px',
          padding: '5px',
        }}
      >
        {Object.entries(props.chosenBarberDetails['barberAvailability']).map(
          ([availableDay, availableHours], index) => {
            return (
              <ScheduleDialog
                key={index}
                availableDay={availableDay}
                availableHours={availableHours}
                setShowFinalAppointment={props.setShowFinalAppointment}
                setAppointmentDetails={props.setAppointmentDetails}
              />
            );
          }
        )}
        <Button
          variant='contained'
          onClick={(e) => props.setShowAvailableTime(false)}
        >
          חזור
        </Button>
      </Box>
    </div>
  );
};
export default BarberAvailabilityTime;
