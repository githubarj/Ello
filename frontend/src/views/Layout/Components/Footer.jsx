import { ThemeProvider } from '@emotion/react';
import {
  Avatar,
  Box,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  PiLinkedinLogoLight,
  PiGithubLogoLight,
  PiCodeLight,
} from 'react-icons/pi';
import theme from '../../theme';

const Footer = () => {
  const socials = [
    {
      link: 'https://www.linkedin.com/in/richard-jeremy-githuba-80548922a/',
      icon: <PiLinkedinLogoLight />,
      title: 'LinkedIn',
    },
    {
      link: 'https://github.com/githubarj',
      icon: <PiGithubLogoLight />,
      title: 'Github',
    },
    {
      link: 'https://githuba.netlify.app/',
      icon: <PiCodeLight />,
      title: 'Portfolio',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Grid className='footer-container'>
        <Divider sx={{ mb: 4 }} />
        <Grid className='footer-content'>
          <Typography variant='body1'>Book Assignment View</Typography>
          <Box className='footer-content__links'>
            {socials.map((item, index) => (
              <Tooltip title={item.title} key={index}>
                <Avatar
                  className='avatars'
                  sizes='small'
                  sx={{
                    bgcolor: 'primary.light',
                    color: 'primary.dark',
                    borderColor: 'primary.dark',
                  }}
                >
                  <a href={item.link} target='blank' >{item.icon}</a>
                </Avatar>
              </Tooltip>
            ))}
          </Box>
          <Typography variant='body1'>by Githuba R Jeremy</Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Footer;
