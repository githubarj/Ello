import { Box, Grid, ThemeProvider, Typography } from '@mui/material';
import { PiBookOpenThin } from 'react-icons/pi';
import HeroImg from '../assets/HeroImg.jpg';
import theme from '../../theme';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container className='hero-container'>
        <Grid className='hero-content'>
          <Box>
            <Typography
              variant='h2'
              sx={{ color: 'primary.dark' }}
              gutterBottom
            >
              What book are you looking for ? <PiBookOpenThin />
            </Typography>
            <Typography variant='caption'>
              Explore our catalog and find your students next read.
            </Typography>
          </Box>
          <Box>
            <SearchBar />
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
