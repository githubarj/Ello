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

const ReadingList = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant='h5'>Assigned Books</Typography>
          <Typography variant='caption'>Reading List</Typography>
        </Box>
        <Grid>
          <Box sx={{ maxWidth: 200 }}>
            <Card sx={{ mb: 2 }}>
              <CardMedia
                component='img'
                alt='green iguana'
                height='140'
                image='/static/images/cards/contemplative-reptile.jpg'
              />
              <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                  Title
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Author
                </Typography>
              </CardContent>
            </Card>
            <Box>
              <Chip label='G' />
              <Button size='small' color='error' variant='contained' sx={{ float: 'right' }}>
                Remove 
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ReadingList;
