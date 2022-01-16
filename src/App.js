import React from "react";

import useRouteCreator from './hooks/useRouteCreator';
import { useState} from "react";
import { languages, LanguageContext } from './context/Context';

import Map from './components/Map';
import ControlPanel from "./components/ControlPanel";
import AppBar from "./components/AppBar";
import DialogWindow from './components/DialogWindow'

import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";


function App() {

  const {
      pointName, 
      handleSetPointName, 
      addressesList, 
      getAddressesList, 
      addressesListChanged, 
      handleShuffleClick, 
      handleJumbledAddress, 
      addressDeleted, 
      handleDelete, 
      deleteAll, 
      handleDeleteAll} = useRouteCreator();

  const [openControlPanel, setOpenControlPanel] = useState(true);
  const [openInfirmationDialog, setOpenInfirmationDialog] = useState(false);
  const [language, setLanguage] = useState(languages[0]);



  function handleOpenInfirmationDialog() {
    setOpenInfirmationDialog(currentState => !currentState);
  }

  const handleOpenControlPanel = () => {
    setOpenControlPanel(openControlPanel => !openControlPanel);
  }


  function handleSetLanguage() {
    setLanguage((currentLanguage) => currentLanguage === 'ru' ? languages[1] : languages[0]);
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh'}}>
      <CssBaseline />
      <LanguageContext.Provider value={language}>
        <DialogWindow
          open={openInfirmationDialog}
          handleOpenInfirmationDialog={handleOpenInfirmationDialog}
        />

        <AppBar
          handleOpenControlPanel={handleOpenControlPanel}
          handleOpenInfirmationDialog={handleOpenInfirmationDialog}
          openControlPanel={openControlPanel}
          language={language}
          handleSetLanguage={handleSetLanguage}
        />

        <ControlPanel
          handleSetPointName={handleSetPointName}
          addressesList={addressesList}
          handleShuffleClick={handleShuffleClick}
          handleDeleteAll={handleDeleteAll}
          handleDelete={handleDelete}
          open={openControlPanel}
          handleOpenControlPanel={handleOpenControlPanel}
          handleJumbledAddress={handleJumbledAddress}
        />

        <Map 
          pointName={pointName} 
          getAddressesList={getAddressesList} 
          addressesListChanged={addressesListChanged} 
          addressDeleted={addressDeleted} 
          deleteAll={deleteAll} 
          open={openControlPanel} 
        />
      </LanguageContext.Provider>
    </Box>
  );
}

export default App;