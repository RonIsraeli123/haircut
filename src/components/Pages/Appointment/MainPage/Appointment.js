import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import BarberCard from '../General/BarberCard';
import ScheduleDialog from '../General/ScheduleDialog';

import {
  BARBERS_HEADER,
  AVAILABLE_BARBERS,
} from '../../../../config/Pages/appointmentPage/appointment';

const Appointment = () => {
  const [showFinalAppointment, setShowFinalAppointment] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = React.useState({
    chosenDay: '',
    chosenHour: '',
  });
  const [showAvailableTime, setShowAvailableTime] = useState(false);
  const [chosenBarberDetails, setChosenBarberDetails] = useState({
    barberName: '',
    barberAvailability: {},
  });

  return (
    <div className='allPage'>
      <div className='appointment-section'>
        <Container component='main' maxWidth='xs'>
          {showFinalAppointment ? (
            <div>
              <Button
                variant='contained'
                onClick={(e) => setShowFinalAppointment(false)}
              >
                בטל
              </Button>
            </div>
          ) : (
            <div>
              <Typography component='h1' variant='h5' fontSize='bold'>
                {BARBERS_HEADER}
              </Typography>
              <div>
                {showAvailableTime ? (
                  <div>
                    {chosenBarberDetails['barberName']}
                    <Box
                      sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: '1px solid black',
                        borderRadius: '10px',
                        padding: '5px',
                      }}
                    >
                      {Object.entries(
                        chosenBarberDetails['barberAvailability']
                      ).map(([availableDay, availableHours]) => {
                        // console.log(availableDay, availableHours);
                        return (
                          <ScheduleDialog
                            availableDay={availableDay}
                            availableHours={availableHours}
                            appointmentDetails={appointmentDetails}
                            setShowFinalAppointment={setShowFinalAppointment}
                            setAppointmentDetails={setAppointmentDetails}
                          />
                        );
                      })}
                      <Button
                        variant='contained'
                        onClick={(e) => setShowAvailableTime(false)}
                      >
                        חזור
                      </Button>
                    </Box>
                  </div>
                ) : (
                  <div className='availableBarbers'>
                    {AVAILABLE_BARBERS.map((barberDetails, index) => {
                      return (
                        <BarberCard
                          key={index}
                          barberName={barberDetails['barberName']}
                          barberAvailability={
                            barberDetails['barberAvailability']
                          }
                          barberDescription={barberDetails['barberDescription']}
                          barberImage={barberDetails['barberImage']}
                          showAvailableTime={showAvailableTime}
                          setShowAvailableTime={setShowAvailableTime}
                          setChosenBarberDetails={setChosenBarberDetails}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};
export default Appointment;
