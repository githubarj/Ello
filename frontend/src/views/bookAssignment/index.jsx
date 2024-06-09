import { Container } from '@mui/material';
import Hero from './Components/Hero';
import ReadingList from './Components/ReadingList';
import { createContext, useState } from 'react';

export const ListContext = createContext();

const BookAssignment = () => {
  const [list, setList] = useState([]);
  console.log(list)

  return (
    <ListContext.Provider value={{ list, setList }}>
      <Container sx={{ padding: '0px !important' }}>
        <Hero />
        <ReadingList />
      </Container>
    </ListContext.Provider>
  );
};

export default BookAssignment;
