import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';

const FeedBack = ({ setOpenRef, message, severity, icon }) => {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    setOpenRef.current = setOpen;
  }, [setOpenRef]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        severity={severity}
        onClose={handleClose}
        sx={{ width: '100%' }}
        icon={icon}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default FeedBack;
