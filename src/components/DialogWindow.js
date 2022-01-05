import React from 'react';

import { blueGradient } from './constants';
import MuiDialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

import { useContext } from "react";
import { LanguageContext } from '../context/Context';
import { content } from '../context/Context';
import '../App.css';

const Dialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: 500,
    paddingBottom: 50,
    borderRadius: 8,
    [theme.breakpoints.down(500)]: {
      width: '100%',
      margin: 10
    }
  }
}));

function DialogWindow({ open, handleOpenInfirmationDialog }) {
  const language = useContext(LanguageContext);

  return (
    <Dialog
      open={open}
      onClose={handleOpenInfirmationDialog}
      aria-labelledby="Useful information"
      aria-describedby="Useful information about route-creator"
    >
      <DialogActions sx={{ background: blueGradient, padding: '0' }}>
        <IconButton onClick={handleOpenInfirmationDialog} sx={{ color: '#ffffff' }}><CloseIcon fontSize='large' /></IconButton>
      </DialogActions>
      <DialogContent sx={{ minHeight: '200px', overflowY: 'auto' }}>
        <DialogContentText>
          <div className='content' dangerouslySetInnerHTML={{ __html:content[language].description}}/>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default DialogWindow;