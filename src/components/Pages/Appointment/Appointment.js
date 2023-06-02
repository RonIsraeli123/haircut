import React, { useState } from 'react';
import Container from '@mui/material/Container';

import FinalAppointmentDetails from './General/FinalAppointmentDetails';
import ChooseBarber from './General/ChooseBarber';

const Appointment = (props) => {
  const [showFinalAppointment, setShowFinalAppointment] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = React.useState({
    chosenDay: '',
    chosenHour: '',
  });
  const [chosenBarberDetails, setChosenBarberDetails] = useState({
    barberName: '',
    barberAvailability: {},
  });

  return (
    <div className='appointment-section'>
      <Container component='main' maxWidth='xs'>
        {showFinalAppointment ? (
          <FinalAppointmentDetails
            barberName={chosenBarberDetails['barberName']}
            chosenDay={appointmentDetails['chosenDay']}
            chosenHour={appointmentDetails['chosenHour']}
            setShowFinalAppointment={setShowFinalAppointment}
            userTors={props.userTors}
            setUserTors={props.setUserTors}
          />
        ) : (
          <ChooseBarber
            chosenBarberDetails={chosenBarberDetails}
            setShowFinalAppointment={setShowFinalAppointment}
            setAppointmentDetails={setAppointmentDetails}
            setChosenBarberDetails={setChosenBarberDetails}
          />
        )}
      </Container>
    </div>
  );
};
export default Appointment;
