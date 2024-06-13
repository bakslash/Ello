import React from 'react';
import { TextField, Box } from '@mui/material';
import { styled } from '@mui/system';

const CenteredBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

const StyledTextField = styled(TextField)`
  width: 33%;
`;

const SearchBar = ({ onChange }) => {
  return (
    <CenteredBox>
      <StyledTextField
        label="Search Books"
        variant="outlined"
        onChange={onChange}
      />
    </CenteredBox>
  );
};

export default SearchBar;
