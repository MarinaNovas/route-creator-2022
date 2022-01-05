import React from "react";

import { drawerWidth, backgroundColorPrimary, blueGradient  } from "./constants";
import { styled} from "@mui/material/styles";
import MuiBox from '@mui/material/Box'
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const DrawerHeader = styled('div')(({theme})=>({
  display:'flex',
  alignItems:'center',
  padding:theme.spacing(0,1),
  background: blueGradient ,
  ...theme.mixins.toolbar,
  justifyContent:'flex-end',
  color:theme.palette.common.white
}));

const СustomerDrawer = styled(MuiDrawer)(({theme})=>({
  flexShrink:0,
  '& .MuiDrawer-paper':{
    width:drawerWidth,
    boxSizing:'border-box',
    [theme.breakpoints.down(drawerWidth)]:{
      width:'100%'
    }
  }
}));

const Box = styled(MuiBox)(({theme})=>({
  display:'flex',
  flexDirection: 'column',
  height: '100%',
  padding:'40px 18px',
  backgroundColor: backgroundColorPrimary,
  overflowY:'hidden',
}))

function Drawer({open,handleOpenControlPanel,children}){
  return(
    <СustomerDrawer
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton aria-label="close control panel" onClick={handleOpenControlPanel} color="inherit">
          <ArrowBackIosIcon fontSize="medium"/>
        </IconButton>
      </DrawerHeader>
      <Box sx={{
        display:'flex',
        flexDirection: 'column',
        height: '100%',
        padding:'40px 18px',
        backgroundColor: backgroundColorPrimary,
        overflowY:'hidden'
      }}>
        {children}
      </Box>
    </СustomerDrawer>
  );
}

export default Drawer;