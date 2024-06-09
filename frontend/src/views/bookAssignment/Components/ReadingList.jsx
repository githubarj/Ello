import {
  Box,
  Card,
  CardContent,
  CardMedia,
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
          <Grid
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'stretch',
            }}
          >
            {list.map((item, index) => (
              <Card
                sx={{
                  mb: 2,
                  maxWidth: 200,
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
                key={index}
              >
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='180'
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
                {/* <CardActions sx={{ justifyContent: 'space-between' , marginTop: 'auto', }}>
                  <Chip label={item.readingLevel} />
                  <Button size='small' color='error' variant='contained'>
                    Remove
                  </Button>
                </CardActions> */}
              </Card>
            ))}
          </Grid>
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default ReadingList;
