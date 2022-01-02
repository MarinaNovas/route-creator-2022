import React from "react";
import { blueGradient } from "./constants";
import MuiButton from '@mui/material/Button';

function Button({ label, handleEvent}) {
  return (
    <MuiButton
      variant="contained"
      sx={{
        background: blueGradient,
        minWidth: '125px'
      }}
      onClick={handleEvent}
    >
      {label}
    </MuiButton>
  );
}

export default Button;