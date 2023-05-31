import React from 'react';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import { JOB_TYPES } from '../../../../config/Pages/appointmentPage/appointment';

const getAppointmentButtonText = 'קבע תור';
const cancelButtonText = 'בטל';

const FinalAppointmentDetails = (props) => {
  const [jobType, setJobType] = React.useState('');

  const handleChange = (event) => {
    setJobType(event.target.value);
  };

  const submitTor = () => {
    if (jobType) {
      console.log(
        `
        ${props.barberName} + ${props.chosenDay} + ${props.chosenHour} + ${jobType}
        `
      );
    } else {
      alert('you have to choose a job type!');
    }
  };

  return (
    <div className='approvementPage'>
      <p className='torDetails'>
        {props.barberName} - {props.chosenDay} - {props.chosenHour}
      </p>
      <div className='jobTypeDetails'>
        <FormControl className='jobTypeInput'>
          <InputLabel id='demo-simple-select-label'>בחר טיפול</InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={jobType}
            onChange={handleChange}
          >
            {JOB_TYPES.map((jobDetails, index) => {
              return (
                <MenuItem key={index} value={jobDetails['value']}>
                  {jobDetails['text']}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className='approveCancelAppointment'>
        <Button variant='contained' onClick={(e) => submitTor(e)}>
          {getAppointmentButtonText}
        </Button>
        <Button
          variant='contained'
          onClick={(e) => {
            props.setShowFinalAppointment(false);
            setJobType('');
          }}
        >
          {cancelButtonText}
        </Button>
      </div>
    </div>
  );
};

export default FinalAppointmentDetails;
