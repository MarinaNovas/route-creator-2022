import React from "react";
import { useState, useContext } from "react";
import { drawerWidth } from "./constants";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import Box from "@mui/material/Box";
import {LanguageContext} from '../context/Context';
import {content} from '../context/Context';


const SendButton = styled(IconButton)(({theme})=>({
  display:'none',
  padding:0,
  [theme.breakpoints.down(drawerWidth)]:{
    display:'block'
  }
}));

function InputText({ handleSetAddress }) {

  const theme = useTheme();

  const [inputValue, setInputValue] = useState('');
  const language = useContext(LanguageContext);

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
        label={content[language].inputPlaceholder}
        variant='outlined'
        sx={{
          flexGrow:'1',
          '& .MuiOutlinedInput-input': {
            backgroundColor: '#ffffff',

            [theme.breakpoints.down(drawerWidth)]:{
              padding:'12px 14px 12px',
            } 
          },
          '& .MuiInputLabel-root':{
            [theme.breakpoints.down(drawerWidth)]:{
              lineHeight: '1.0em'
            } 
          }
        }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleKeyUp}
        autoFocus={true}
      />
      <SendButton onClick={handleSendButton}>
        <AddIcon fontSize="large" sx={{opacity:'0.7'}}/>
      </SendButton>
    </Box>
  );
}

export default InputText;