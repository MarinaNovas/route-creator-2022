import React from "react";

import useRouteCreator from './useRouteCreator';
import { useState, useCallback} from "react";
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
  /* const [pointName, setPointName] = useState(null);
  const [addressesList, setAddressesList] = useState(null);
  const [addressesListChanged, setAddressesListChanged] = useState(null);
  const [addressDeleted, setAddressDeleted] = useState(null);
  const [deleteAll, setDeleteAll] = useState(false); */
  const [language, setLanguage] = useState(languages[0]);



  function handleOpenInfirmationDialog() {
    setOpenInfirmationDialog(currentState => !currentState);
  }

  const handleOpenControlPanel = () => {
    setOpenControlPanel(openControlPanel => !openControlPanel);
  }

/*   function handleShuffleClick() {
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

  function handleDeleteAll() {
    setDeleteAll(true);
  }

  function handleSetPointName(newPointName) {
    setPointName(newPointName);
  } */

  function handleSetLanguage() {
    setLanguage((currentLanguage) => currentLanguage === 'ru' ? languages[1] : languages[0]);
  }

/*   const getAddressesList = useCallback((addresses) => {
    setAddressesList(addresses);
    setPointName(null);
    setDeleteAll(false);
  }, [setAddressesList]);
 */

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: backgroundColorPrimary }}>
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