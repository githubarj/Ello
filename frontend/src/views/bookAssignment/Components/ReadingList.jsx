import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Grow,
  IconButton,
  ThemeProvider,
  Tooltip,
  Typography,
} from '@mui/material';
import theme from '../../theme';
import { useContext, useRef, useState } from 'react';
import { ListContext } from '..';
import BookOpen from '../assets/BookOpen.png';
import { MdDelete } from 'react-icons/md';
import ConfirmDelete from './ConfirmDelete';
import FeedBack from './FeedBack';

const ReadingList = () => {
  const { list, listActions } = useContext(ListContext);
  const [openItem, setOpenItem] = useState(null); 
  const setOpenRef = useRef(null);

  const handleOpenSnackbar = () => {
    if (setOpenRef.current) {
      setOpenRef.current(true);
    }
  };

  const handleOpen = (id) => () => setOpenItem(id); 
  const handleClose = () => setOpenItem(null); 

  return (
    <ThemeProvider theme={theme}>
      <Grid className='reading-list'>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant='h5'>Assigned Books</Typography>
          <Typography variant='caption'>Reading List</Typography>
        </Box>
        {list.length === 0 ? (
          <Typography
            className='empty-list'
            sx={{
              p: 8,
              color: 'error.main',
            }}
            variant='h3'
          >
            <img src={BookOpen} alt='' /> Add some books :)
          </Typography>
        ) : (
          <Grid container className='cards-list' spacing={2}>
            {list.map((item, index) => (
              <Grid item key={index} xs={6} sm={4} md={3} lg={3}>
                <Grow in={list.length !== 0}>
                  <Card className='card'>
                    <CardMedia
                      component='img'
                      alt='Book Cover photo '
                      height='240'
                      image={item.coverPhotoURL}
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h6' component='div'>
                        {item.title}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='text.secondary'
                        sx={{ marginTop: 'auto' }}
                      >
                        {item.author}
                      </Typography>
                    </CardContent>
                    <Chip
                      filled
                      label={item.readingLevel}
                      className='level-chip'
                      sx={{ bgcolor: 'error.light' }}
                    />
                    <Tooltip title='Remove book from list' placement='top'>
                      <IconButton
                        aria-label='delete'
                        className='delete-button'
                        sx={{ color: 'error.main' }}
                        onClick={handleOpen(item.id)} 
                      >
                        <MdDelete />
                      </IconButton>
                    </Tooltip>
                    <ConfirmDelete
                      handleOpenSnackbar={handleOpenSnackbar}
                      open={openItem === item.id} 
                      handleClose={handleClose}
                      index={item.id}
                      removeItem={() => {
                        listActions.removeItem(item.id); 
                        handleClose();
                      }}
                    />
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
      <FeedBack
        icon={<MdDelete fontSize='inherit' />}
        setOpenRef={setOpenRef}
        message='Book has been removed successfully'
        severity='warning'
      />
    </ThemeProvider>
  );
};

export default ReadingList;
