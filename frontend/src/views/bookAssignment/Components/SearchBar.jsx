import { useContext, useEffect, useRef, useState } from 'react';
import { bookAssignmentService } from '../../../_services/bookAssignmentService';
import {
  Autocomplete,
  Box,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { ListContext } from '..';
import FeedBack from './FeedBack';

const SearchBar = () => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const setOpenRef = useRef(null);

  const { listActions } = useContext(ListContext);

  const query = `
      query {
         books {
            title
            author
            coverPhotoURL
            readingLevel
                }
            }
`;

  useEffect(() => {
    setLoading(true);
    bookAssignmentService
      .getAllBooks(query)
      .then((resp) => {
        setOptions(
          resp?.data?.books.map((item, index) => ({
            id: index,
            ...item,
          }))
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log('error data \t', err);
        setLoading(false);
      });
  }, []);

  const handleOptionChange = (e, selectedOption) => {
    if (selectedOption !== null) {
      listActions.addItem(selectedOption);
      handleOpenSnackbar();
    }
  };

  const handleOpenSnackbar = () => {
    if (setOpenRef.current) {
      setOpenRef.current(true);
    }
  };
  return (
    <>
      <Autocomplete
        size='small'
        autoHighlight
        noOptionsText='Book Not Found'
        onChange={handleOptionChange}
        disablePortal
        options={options}
        loading={loading}
        sx={{ width: '80%' }}
        getOptionKey={(option) => option.id}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <Tooltip title='Click on an option to add ' placement='top'>
            <TextField
              {...params}
              label='Type the title of book...'
              className='search-bar'
            />
          </Tooltip>
        )}
        renderOption={(props, option) => (
          <Box component='li' {...props}>
            <Typography variant='body1' sx={{ mr: 2 }}>
              {option.title}
            </Typography>
            <Typography variant='caption'>{option.author} </Typography>
          </Box>
        )}
      />
      <FeedBack
        setOpenRef={setOpenRef}
        message='Book has been added successfully'
        severity='success'
      />
    </>
  );
};

export default SearchBar;
