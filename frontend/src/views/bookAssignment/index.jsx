import { Container } from '@mui/material';
import Hero from './Components/Hero';
import ReadingList from './Components/ReadingList';
import { createContext, useReducer } from 'react';
import { listReducer } from '../../_helpers/reducers';

export const ListContext = createContext();

const BookAssignment = () => {
  const [list, dispatch] = useReducer(listReducer, []);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', index });
  };

  const resetList = () => {
    dispatch({ type: 'RESET_LIST' });
  };

  return (
    <ListContext.Provider value={{ list, addItem, removeItem, resetList }}>
      <Container sx={{ padding: '0px !important' }}>
        <Hero />
        <ReadingList />
      </Container>
    </ListContext.Provider>
  );
};

export default BookAssignment;
