import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { Container } from '@mui/material';
import Footer from './Components/Footer';

const Layout = () => {
  return (
    <Container className='layout'>
      <NavBar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
