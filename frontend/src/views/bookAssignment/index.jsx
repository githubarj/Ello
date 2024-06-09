import { Container } from '@mui/material';
import Hero from './Components/Hero';
import ReadingList from './Components/ReadingList';

const BookAssignment = () => {
  return (
    <Container sx={{ padding: '0px !important' }}>
      <Hero />
      <ReadingList />
    </Container>
  );
};

export default BookAssignment;
