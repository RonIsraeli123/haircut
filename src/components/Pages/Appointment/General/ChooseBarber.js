import React, { useState } from 'react';

import BarbersOption from './help/BarbersOption';
import BarberAvailabilityTime from './help/BarberAvailabilityTime';

const ChooseBarber = (props) => {
  const [showAvailableTime, setShowAvailableTime] = useState(false);

  return (
    <div>
      {showAvailableTime ? (
        <BarberAvailabilityTime
          chosenBarberDetails={props.chosenBarberDetails}
          setShowFinalAppointment={props.setShowFinalAppointment}
          setShowAvailableTime={setShowAvailableTime}
          setAppointmentDetails={props.setAppointmentDetails}
        />
      ) : (
        <BarbersOption
          showAvailableTime={showAvailableTime}
          setShowAvailableTime={setShowAvailableTime}
          setChosenBarberDetails={props.setChosenBarberDetails}
        />
      )}
    </div>
  );
};
export default ChooseBarber;
