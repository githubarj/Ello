import { Box, Button, Fade, Modal, Typography } from '@mui/material';

const ConfirmDelete = ({
  open,
  handleClose,
  removeItem,
  handleOpenSnackbar,
}) => {
  const handleDelete = () => {
    removeItem();
    handleClose();
    handleOpenSnackbar();
  };

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={{ p: 3, bgcolor: 'primary.light' }} className='modal-box'>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            gutterBottom
          >
            Are you sure you want to remove this book?
          </Typography>
          <Box sx={{ float: 'right' }}>
            <Button
              variant='outlined'
              color='primary'
              sx={{ marginRight: '5px' }}
              onClick={handleClose}
            >
              No
            </Button>
            <Button
              disableElevation
              variant='contained'
              color='error'
              onClick={handleDelete}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ConfirmDelete;
