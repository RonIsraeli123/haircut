import React from 'react';

import Container from '@mui/material/Container';

import TorView from './TorView';

const UserTor = (props) => {
  return (
    <div className='appointment-section'>
      <Container component='main' maxWidth='xs'>
        {props.userTors.map((appointmentDetails) => {
          return (
            <TorView
              key={appointmentDetails['id']}
              day={appointmentDetails['day']}
              hour={appointmentDetails['hour']}
              jobType={appointmentDetails['jobType']}
              barberName={appointmentDetails['barberName']}
              id={appointmentDetails['id']}
              userTors={props.userTors}
              setUserTors={props.setUserTors}
            />
          );
        })}
      </Container>
    </div>
  );
};
export default UserTor;
