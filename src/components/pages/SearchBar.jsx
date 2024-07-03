import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
    // You can add your search logic here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
        sx={{
          width: '70%',
          borderRadius: 1,
          '& .MuiOutlinedInput-root': {
            borderRadius: 3,
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <button onClick={handleSearch} style={{ border: 'none', background: 'none' }}>
                Search
              </button>
            </InputAdornment>
          ),
        }}
      />
      
    </div>
  );
};

export default SearchBox;
