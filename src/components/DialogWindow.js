import React from 'react';

import {blueGradient } from './constants';
import MuiDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const Dialog = styled(MuiDialog)(({theme})=>({
  '& .MuiPaper-root':{
    width:500,
    paddingBottom:50,
    borderRadius:8,
    [theme.breakpoints.down(500)]:{
      width:'100%',
      margin:10
    }
  }
}));

function DialogWindow({open,handleOpenInfirmationDialog}){
  
  return(
    <Dialog
      open={open}
      onClose={handleOpenInfirmationDialog}
      aria-labelledby="Useful information"
      aria-describedby="Useful information about route-creator"
    >
      <DialogActions sx={{background:blueGradient,padding:'0'}}>
        <IconButton onClick={handleOpenInfirmationDialog} sx={{color:'#ffffff'}}><CloseIcon fontSize='large'/></IconButton>
      </DialogActions>
      <DialogTitle>Information about this application</DialogTitle>
      <DialogContent sx={{maxHeight:'200px', overflowY:'auto'}}>
        <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default DialogWindow;