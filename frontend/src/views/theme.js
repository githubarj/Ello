import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, Arial, sans-serif',
  },
  pallete: {
    primary: {
      turqoise: '#5ACCCC',
      white: '#FFFFFF',
      steelBlue: '#335C6E',
      yellow: '#FABD33',
    },
    secondary: {
      turqoiseLight: '#CFFAFA',
      turqoiseDark1: '#53C2C2',
      turqoiseDark2: '#28B8B8',
      orangeRed: '#F76434',
      orangePastel: '#FFE6DC',
      teal: '#4AA088',
      yellowDark: '#FAAD00',
    },
  },
});

export default theme;
