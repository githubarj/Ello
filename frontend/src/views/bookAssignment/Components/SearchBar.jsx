import { useContext, useState } from 'react';
import { bookAssignmentService } from '../../../_services/bookAssignmentService';
import { Autocomplete, Box, TextField, Typography } from '@mui/material';
import { ListContext } from '..';

const SearchBar = () => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const loadOptions = () => {
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
  };
  const handleOptionChange = (e, selectedOption) => {
    if (selectedOption !== null) {
      listActions.addItem(selectedOption);
      console.log(selectedOption);
    }
  };

  console.log(options);

  return (
    <Autocomplete
      size='small'
      autoHighlight
      onOpen={loadOptions}
      onChange={handleOptionChange}
      disablePortal
      options={options}
      loading={loading}
      sx={{ width: '80%' }}
      getOptionKey={(option) => option.id}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Type the title of book...'
          className='search-bar'
        />
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
  );
};

export default SearchBar;
