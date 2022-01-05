import React from "react";
import { useContext } from "react";
import { blueGradient } from "./constants";
import MuiButton from '@mui/material/Button';

import {LanguageContext} from '../context/Context';
import {content} from '../context/Context';

function Button({ label, handleEvent}) {
  const language = useContext(LanguageContext);

  return (
    <MuiButton
      variant="contained"
      sx={{
        background: blueGradient,
        minWidth: '125px'
      }}
      onClick={handleEvent}
    >
      {label==='shuffle'?content[language].buttonShuffle:content[language].buttonDeleteAll}
    </MuiButton>
  );
}

export default Button;