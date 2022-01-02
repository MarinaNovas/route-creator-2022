import React from "react";

import { drawerWidth, blueGradient } from "./constants";
import { styled } from "@mui/material/styles";
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Button from '@mui/material/Button'

const СustomerAppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })
  (({ theme, open }) => ({
    background:blueGradient ,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      width: `calc(100% - ${drawerWidth}px)`
    })
  }));

function AppBar({handleOpenControlPanel,handleOpenInfirmationDialog,openControlPanel,language,handleSetLanguage}) {

  return (
    <СustomerAppBar position="fixed" open={openControlPanel}>
      <Toolbar>
        <IconButton
          aria-label="control panel"
          onClick={handleOpenControlPanel}
          color="inherit"
          edge='start'
          sx={{ mr: 2, display: openControlPanel ? 'none' : 'block' }}
        >
          <ArrowForwardIosIcon fontSize="medium" />
        </IconButton>
        <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>Route creator</Typography>
        <Button 
          variant="text" 
          color="inherit" 
          sx={{ fontSize: '1.2rem', borderRadius: '12px' }}
          onClick={handleSetLanguage}
        >
          {language}
        </Button>
        <IconButton
          aria-label="help inaformation"
          onClick={handleOpenInfirmationDialog}
          color="inherit"
          edge='end'
        >
          <HelpOutlineIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </СustomerAppBar>
  );
}

export default AppBar;

