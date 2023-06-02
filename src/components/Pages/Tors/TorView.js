import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));

export default function TorView(props) {
  const cancelButtonText = 'בטל תור';

  const handleOnclick = () => {
    props.setUserTors([
      props.userTors.filter((tor) => {
        return tor.id !== props.id;
      }),
    ]);
  };

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Item
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Stack spacing={2} direction='row' alignItems='center'>
          <Avatar>W</Avatar>
          <Typography
            noWrap
          >{`${props.day} - ${props.hour} - ${props.jobType} - ${props.barberName}`}</Typography>
        </Stack>
      </Item>
      <Button variant='contained' onClick={() => handleOnclick()}>
        {cancelButtonText}
      </Button>
    </Box>
  );
}
