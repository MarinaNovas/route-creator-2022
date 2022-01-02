import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';

function InputText({handleSetAddress}) {
  
  const [inputValue, setInputValue]=useState('');

  const handleKeyUp=(e)=>{
    if (e.code !== 'Enter') return;
    handleSetAddress(inputValue);
    setInputValue('');
  }

  return (
    <TextField
      label='Введите адрес...'
      variant='outlined'
      sx={{
        mb: '40px',
        '& .MuiOutlinedInput-input': {
          backgroundColor: '#ffffff'
        }
      }}
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      onKeyUp={handleKeyUp}
      autoFocus={true}
    />
  );
}

export default InputText;