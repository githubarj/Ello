import { useContext, useState } from 'react';
import { bookAssignmentService } from '../../../_services/bookAssignmentService';
import { Autocomplete, TextField } from '@mui/material';
import { ListContext } from '..';

const SearchBar = () => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setList } = useContext(ListContext);

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
        setOptions(resp?.data?.books);
        setLoading(false);
      })
      .catch((err) => {
        console.log('error data \t', err);
        setLoading(false);
      });
  };
  const handleOptionChange = (e, selectedOption) => {
    if (selectedOption !== null) {
      setList((prev) => [...prev, selectedOption]);
      console.log(selectedOption);
    }
  };

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
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Type the name of book or author...'
          className='search-bar'
        />
      )}
    />
  );
};

export default SearchBar;
