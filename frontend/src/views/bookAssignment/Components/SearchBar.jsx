import { useEffect, useState } from 'react';
import { bookAssignmentService } from '../../../_services/bookAssignmentService';
import { Autocomplete, TextField } from '@mui/material';

const SearchBar = () => {
  const [options, setOptions] = useState([]);

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
    bookAssignmentService
      .getAllBooks(query)
      .then((resp) => {
        setOptions(resp?.data?.books);
      })
      .catch((err) => {
        console.log('error data \t', err);
      });
  }, []);

  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={options}
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => <TextField {...params} label='Movie' />}
    />
  );
};

export default SearchBar;
