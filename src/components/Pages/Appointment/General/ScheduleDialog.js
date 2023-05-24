import * as React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import ConfirmationDialogRaw from '../General/ConfirmationDialogRaw';

export default function ScheduleDialog(props) {
  const {
    availableDay,
    availableHours,
    setShowFinalAppointment,
    setAppointmentDetails,
  } = props;

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
      // insert appointment details to db
      console.log(availableDay);
      console.log(newValue);
      setAppointmentDetails({
        chosenDay: availableDay,
        chosenHour: newValue,
      });
      setShowFinalAppointment(true);
    }
  };

  return (
    <div>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List component='div' role='group'>
          <ListItem
            button
            divider
            aria-haspopup='true'
            onClick={handleClickListItem}
          >
            <ListItemText
              primary={availableDay}
              className='center-column'
              secondary={value}
            />
          </ListItem>
          <ConfirmationDialogRaw
            availableHours={availableHours}
            keepMounted
            open={open}
            onClose={handleClose}
            value={value}
          />
        </List>
      </Box>
    </div>
  );
}
