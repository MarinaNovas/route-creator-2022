import React from "react";

import { useState, useEffect } from "react";

import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";

function AutocompleteInput({ autoComleteList, handleSetAutoAddress, handleSetAddress }) {

  const [autocomleteValue, setAutocomleteValue] = useState('');
  const [optionValue, setOptionValue] = useState(null);

  const handleKeyDown = (e) => {
    if (e.code !== 'Enter') return;
    //console.log(optionValue);
    const temp = Object.assign({},optionValue);
    //console.log(zzz.address);
    handleSetAddress(temp.address);
    setAutocomleteValue('');
    setOptionValue(null);
  }

  useEffect(() => {
    if (!autocomleteValue) return;
    handleSetAutoAddress(autocomleteValue);

  }, [autocomleteValue, handleSetAutoAddress]);

  return (
    <Autocomplete
      fullWidth
      filterOptions={(x) => x}
      options={autoComleteList}
      getOptionLabel={(option) => option.address ?? option}
      renderOption={(props, option) => <li {...props} key={option.key}>{option.address}</li>}
      isOptionEqualToValue={(option, value) => option.address === value.address}
      sx={{
        marginBottom: '20px',
        '& .MuiButtonBase-root': {
          display: 'none'
        },
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#ffffff'
        }
      }}
      value={optionValue}
      onChange={(event, newValue) => {
        setOptionValue(newValue);
      }}
      inputValue={autocomleteValue}
      onInputChange={(e, value) => {
        setAutocomleteValue(value);
        setOptionValue(null);
      }}
      onKeyDown={handleKeyDown}
      renderInput={(params) => <TextField {...params} autoFocus={true} label="Введите адрес..." />}
    />
  );
}

export default AutocompleteInput;