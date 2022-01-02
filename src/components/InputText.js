import React from "react";
import { useState } from "react";
import { drawerWidth } from "./constants";
import { styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import Box from "@mui/material/Box";


const SendButton = styled(IconButton)(({theme})=>({
  display:'none',
  [theme.breakpoints.down(drawerWidth)]:{
    display:'block'
  }
}));

function InputText({ handleSetAddress }) {

  const [inputValue, setInputValue] = useState('');

  const handleKeyUp = (e) => {
    if (e.code !== 'Enter') return;
    handleSetAddress(inputValue);
    setInputValue('');
  }

  const handleSendButton = ()=>{
    handleSetAddress(inputValue);
    setInputValue('');
  }

  return (
    <Box sx={{width:'100%', display:'flex', alignItems:'center',mb: '40px',}}>
      <TextField
        label='Введите адрес...'
        variant='outlined'
        sx={{
          flexGrow:'1',
          '& .MuiOutlinedInput-input': {
            backgroundColor: '#ffffff'
          }
        }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleKeyUp}
        autoFocus={true}
      />
      <SendButton onClick={handleSendButton}>
        <SendIcon fontSize="large" sx={{opacity:'0.7'}}/>
      </SendButton>
    </Box>
  );
}

export default InputText;