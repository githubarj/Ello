import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['Mulish, Arial, sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#5ACCCC',
      light: '#FFFFFF',
      dark: '#335C6E',
      contrastText: '#FABD33',
    },
    secondary: {
      light: '#CFFAFA',
      main: '#53C2C2',
      dark: '#28B8B8',
    },
    error: {
      main: '#F76434',
      light: '#FFE6DC',
    },
    info: {
      main: '#4AA088',
    },
    warning: {
      main: '#FAAD00',
    },
  },
});

export default theme;
