import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  ThemeProvider,
  Typography,
} from '@mui/material';
import theme from '../../theme';
import { useContext } from 'react';
import { ListContext } from '..';
import BookOpen from '../assets/BookOpen.png';
const ReadingList = () => {
  const { list } = useContext(ListContext);

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
          <Grid>
            {list.map((item, index) => (
              <Box sx={{ maxWidth: 200 }} key={index}>
                <Card sx={{ mb: 2 }}>
                  <CardMedia
                    component='img'
                    alt='green iguana'
                    height='140'
                    image={item.coverPhotoURL}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='div'>
                      {item.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {item.author}
                    </Typography>
                  </CardContent>
                </Card>
                <Box>
                  <Chip label={item.readingLevel} />
                  <Button
                    size='small'
                    color='error'
                    variant='contained'
                    sx={{ float: 'right' }}
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
            ))}
          </Grid>
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default ReadingList;
