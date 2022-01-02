import React from "react";
import { useState, useCallback } from "react";
import { languages, LanguageContext } from './context/Context';

import Map from './components/Map';
import ControlPanel from "./components/ControlPanel";
import AppBar from "./components/AppBar";
import DialogWindow from './components/DialogWindow'
import shuffle from 'lodash.shuffle';

import { backgroundColorPrimary } from "./components/constants";
import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";



function App() {

  const [openControlPanel, setOpenControlPanel] = useState(true);
  const [openInfirmationDialog, setOpenInfirmationDialog] = useState(false);
  const [address, setAddress] = useState(null);
  const [addressesList, setAddressesList] = useState(null);
  const [addressesListChanged, setAddressesListChanged] = useState(null);
  const [addressDeleted, setAddressDeleted] = useState(null);
  const [language, setLanguage] = useState(languages[0]);
  const [deleteAll, setDeleteAll]=useState(false);

  function handleOpenInfirmationDialog() {
    setOpenInfirmationDialog(currentState=>!currentState);
  }

  const handleOpenControlPanel = () => {
    setOpenControlPanel(openControlPanel => !openControlPanel);
  }
  function handleShuffleClick() {
    setAddressesListChanged(shuffle(addressesList));
  }

  function handleJumbledAddress(jumbledAddresses) {
    const newJumbledAddresses = jumbledAddresses.map((id) => {
      return addressesList.find((itemZ) => itemZ.id === id);
    });
    setAddressesListChanged(newJumbledAddresses)
  }

  function handleDelete(id) {
    setAddressDeleted(...addressesList.filter(item => item.id === id));
  }

  function handleDeleteAll(){
    setDeleteAll(true);
  }

  function handleSetAddress(newAddress) {
    setAddress(newAddress);
  }

  function handleSetLanguage() {
    setLanguage((currentLanguage) => currentLanguage === 'ru' ? languages[1] : languages[0]);
  }

  const getAddressesList = useCallback((addresses) => {
    setAddressesList(addresses);
    setAddress(null);
    setDeleteAll(false);
  }, [setAddressesList]);


  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: backgroundColorPrimary }}>
      <CssBaseline />
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
       /*  address={address} */
        handleSetAddress={handleSetAddress}
        addressesList={addressesList}
        /* language={language} */
       /*  handleSetLanguage={handleSetLanguage} */
        handleShuffleClick={handleShuffleClick}
        /* deleteAll={deleteAll} */
        handleDeleteAll={ handleDeleteAll}
        handleDelete={handleDelete}
        open={openControlPanel}
        handleOpenControlPanel={handleOpenControlPanel}
        handleJumbledAddress={handleJumbledAddress}
      />
      <LanguageContext.Provider value={language}>
        <Map address={address} getAddressesList={getAddressesList} addressesListChanged={addressesListChanged} addressDeleted={addressDeleted} deleteAll={deleteAll} open={openControlPanel} />
      </LanguageContext.Provider>
    </Box>
  );
}

export default App;