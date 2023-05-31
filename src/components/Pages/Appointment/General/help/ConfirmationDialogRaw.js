import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

import { AVAILABLE_TIME_HEADER } from '../../../../../config/Pages/appointmentPage/appointment';

const cancelButtonText = 'ביטול';
const approveButtonText = 'אישור';

const ConfirmationDialogRaw = (props) => {
  const { onClose, value: valueProp, open, availableHours, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth='xs'
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle className='center'>{AVAILABLE_TIME_HEADER}</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label='ringtone'
          name='ringtone'
          value={value}
          onChange={handleChange}
        >
          {availableHours.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          {cancelButtonText}
        </Button>
        {value ? (
          <Button onClick={handleOk}>{approveButtonText}</Button>
        ) : (
          <Button disabled onClick={handleOk}>
            {approveButtonText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};
export default ConfirmationDialogRaw;
