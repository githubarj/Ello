import {
  Box,
  Button,
  Divider,
  Grid,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { PiBookOpenThin, PiBinocularsLight } from 'react-icons/pi';
import HeroImg from '../assets/HeroImg.jpg';
import theme from '../../theme';
import SearchBar from './SearchBar';

const Hero = () => {
    const scrollToHeight = () => {
      window.scrollTo({
        top: 390,
        behavior: 'smooth', // Smooth scrolling
      });
    };

  return (
    <ThemeProvider theme={theme}>
      <Grid container className='hero-container'>
        <Grid className='hero-content'>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant='h3'
              sx={{ color: 'primary.dark' }}
              gutterBottom
            >
              What book are you looking for ? <PiBookOpenThin />
            </Typography>
            <Typography variant='caption'>
              Explore our catalog and find your students next read.
            </Typography>
          </Box>
          <Box sx={{ mb: 5 }}>
            <SearchBar />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Button
              variant='contained'
              endIcon={<PiBinocularsLight />}
              onClick={scrollToHeight}
              sx={{
                bgcolor: 'warning.main',
                color: 'black',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
            >
              Current List
            </Button>
            <Divider sx={{ width: '60%' }} textAlign='left' />
          </Box>
        </Grid>
        <Grid className='hero-image-div'>
          <img src={HeroImg} alt='Image for the hero section' />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Hero;
