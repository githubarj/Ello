import { Avatar, Grid, ThemeProvider } from '@mui/material';
import { CiUser } from 'react-icons/ci';
import elloSvg from '../../../../public/ello.svg';
import theme from '../../theme';

const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        className='navbar-container'
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <div className='logo-container'>
          <img src={elloSvg} alt='Ello Logo' />
        </div>
        <Avatar sx={{ bgcolor: 'primary.main', cursor: 'pointer' }}>
          <CiUser />
        </Avatar>
      </Grid>
    </ThemeProvider>
  );
};

export default NavBar;
