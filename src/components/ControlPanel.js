import React from "react";

import Drawer from "./Drawer";
import InputText from "./InputText";
import Button from "./Button";
import AddressFormesContainer from "./AddressFormesContainer";
import AddressForm from "./AddressForm";

import Box from '@mui/material/Box';


function ControlPanel({handleSetAddress, addressesList, handleShuffleClick,handleDeleteAll, handleDelete, open, handleOpenControlPanel, handleJumbledAddress }) {


  return (
    <Drawer open={open} handleOpenControlPanel={handleOpenControlPanel}>
      <InputText handleSetAddress={handleSetAddress} />
      <AddressFormesContainer handleJumbledAddress={handleJumbledAddress}  addressesList={addressesList}>
        {addressesList &&
          addressesList.map((item, index) => (
            <AddressForm key={item.id} index={index} address={item.address} id={item.id} handleDelete={handleDelete} />
          ))
        }
      </AddressFormesContainer>

      <Box display='flex' justifyContent='space-between' sx={{ padding: '30px 10px 0 10px' }}  >
        <Button label='Shuffle' handleEvent={handleShuffleClick} />
        <Button label='Delete All' handleEvent={handleDeleteAll} />
      </Box>
    </Drawer>
  );
}

export default ControlPanel