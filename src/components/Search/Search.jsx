import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import useStyles from './styles';

function Search() {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  const handleKeyPress = () => {};
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default Search;
