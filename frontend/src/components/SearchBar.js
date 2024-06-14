import React, { useState } from 'react';
import { TextField, Box, Autocomplete } from '@mui/material';
import { styled } from '@mui/system';

const CenteredBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

const StyledTextField = styled(TextField)`
  width: 80%; /* Adjust width as needed */
`;

const SearchBar = ({ onChange, books }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event, value) => {
    setSearchTerm(value);
    onChange({ target: { value } });
  };

  const handleInputChangeTextField = (event) => {
    setSearchTerm(event.target.value);
    onChange(event);
  };

  const bookTitles = books ? books.map((book) => book.title) : [];

  return (
    <CenteredBox>
      <Autocomplete
        options={bookTitles}
        sx={{ width: 400 }}
        freeSolo
        value={searchTerm}
        onInputChange={handleInputChange}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            label="Search Books"
            variant="outlined"
            fullWidth
            onChange={handleInputChangeTextField}
            inputProps={{
              ...params.inputProps,
              style: { fontSize: '1rem' },
            }}
          />
        )}
      />
    </CenteredBox>
  );
};

export default SearchBar;
