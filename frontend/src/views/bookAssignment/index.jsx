import { Container } from '@mui/material';
import Hero from './Components/Hero';
import ReadingList from './Components/ReadingList';
import { createContext, useReducer } from 'react';
import { listReducer } from '../../_helpers/reducers';

export const ListContext = createContext();

const BookAssignment = () => {
  const [list, dispatch] = useReducer(listReducer, []);

  const listActions = {
    addItem: (item) => {
      dispatch({ type: 'ADD_ITEM', payload: item });
    },
    removeItem: (index) => {
      dispatch({ type: 'REMOVE_ITEM', index });
    },
    resetList: () => {
      dispatch({ type: 'RESET_LIST' });
    },
  };

  return (
    <ListContext.Provider value={{ list, listActions }}>
      <Container sx={{ padding: '0px !important' }}>
        <Hero />
        <ReadingList />
      </Container>
    </ListContext.Provider>
  );
};

export default BookAssignment;
