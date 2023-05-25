import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import BarberCard from './General/BarberCard';
import ScheduleDialog from './General/ScheduleDialog';

import {
  BARBERS_HEADER,
  AVAILABLE_BARBERS,
} from '../../../config/Pages/appointmentPage/appointment';

const Appointment = () => {
  const [jobType, setJobType] = React.useState('');
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

  const handleChange = (event) => {
    setJobType(event.target.value);
  };

  return (
    <div className='allPage'>
      <div className='appointment-section'>
        <Container component='main' maxWidth='xs'>
          {showFinalAppointment ? (
            <div>
              {chosenBarberDetails['barberName']}
              {appointmentDetails['chosenDay']}
              {appointmentDetails['chosenHour']}
              <FormControl className='formInputSelect'>
                <InputLabel id='demo-simple-select-label'>בחר טיפול</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={jobType}
                  onChange={handleChange}
                >
                  <MenuItem value={'תספורת + זקן'}>תספורת + זקן</MenuItem>
                  <MenuItem value={'תספורת בלבד'}>תספורת</MenuItem>
                  <MenuItem value={'זקן'}> זקן</MenuItem>
                </Select>
              </FormControl>

              <Button variant='contained' onClick={(e) => console.log('done!')}>
                קבע תור
              </Button>
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
                      ).map(([availableDay, availableHours], index) => {
                        // console.log(availableDay, availableHours);
                        return (
                          <ScheduleDialog
                            key={index}
                            availableDay={availableDay}
                            availableHours={availableHours}
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