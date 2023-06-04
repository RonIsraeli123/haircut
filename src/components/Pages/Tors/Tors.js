import React from 'react';

import Container from '@mui/material/Container';

import TorView from './TorView';
const emptyTorsMsg = 'לא נקבעו תורים';

const UserTor = (props) => {
  return (
    <div className='appointment-section'>
      <Container component='main' maxWidth='xs'>
        {props.userTors ? (
          <div>
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
          </div>
        ) : (
          <div> {emptyTorsMsg}</div>
        )}
      </Container>
    </div>
  );
};
export default UserTor;
