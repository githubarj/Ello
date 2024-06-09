import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

const ReadingList = () => {
  return (
    <Grid>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant='h5'>Assigned Books</Typography>
        <Typography variant='caption'>Reading List</Typography>
      </Box>
      <Grid>
        <Box sx={{ maxWidth: 250 }}>
          <Card sx={{  mb: 2 }}>
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
            <Button variant='contained' sx={{ float: 'right' }}>
              Remove
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReadingList;
