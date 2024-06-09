import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { Container } from '@mui/material';

const Layout = () => {
  return (
    <Container className='layout'>
      <NavBar />
      <Outlet />
    </Container>
  );
};

export default Layout;
