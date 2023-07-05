import React from 'react';

import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { useHistory } from 'react-router-dom';

const emptyTorsMsg = 'לא נקבעו תורים';
const backButtonText = 'חזור';

const UserTor = (props) => {
  const history = useHistory();

  const handleDelete = (id) => {
    const availableTors = props.userTors.filter((tor) => tor['id'] !== id);
    props.setUserTors(availableTors);
  };

  return (
    <div className='allPage'>
      <div className='appointment-section'>
        {props.userTors.length > 0 ? (
          <Container component='main' maxWidth='xs'>
            <div className='torsItems'>
              {props.userTors.map((appointmentDetails, index) => {
                return (
                  <Chip
                    className='torChip'
                    key={index}
                    // icon={icon}
                    label={`${appointmentDetails['day']} - ${appointmentDetails['hour']} - ${appointmentDetails['jobType']} - ${appointmentDetails['barberName']}`}
                    onDelete={() => handleDelete(appointmentDetails['id'])}
                  />
                );
              })}
            </div>
          </Container>
        ) : (
          <div>
            <p>{emptyTorsMsg}</p>
          </div>
        )}
        <Button
          variant='contained'
          onClick={(e) => {
            history.push('/appointment');
          }}
        >
          {backButtonText}
        </Button>
      </div>
    </div>
  );
};
export default UserTor;
