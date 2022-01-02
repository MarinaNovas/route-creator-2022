import React from "react";

import Drawer from "./Drawer";
import InputText from "./InputText";
import Button from "./Button";
import AddressFormesContainer from "./AddressFormesContainer";
import AddressForm from "./AddressForm";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Box from '@mui/material/Box';


function ControlPanel({ handleSetAddress, addressesList, handleShuffleClick, handleDeleteAll, handleDelete, open, handleOpenControlPanel, handleJumbledAddress }) {

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = addressesList.map(item=>item.id);

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    handleJumbledAddress(items);
  }

  return (
    <Drawer open={open} handleOpenControlPanel={handleOpenControlPanel}>
      <InputText handleSetAddress={handleSetAddress} />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {
            (provided) => (
              <AddressFormesContainer provided={provided} innerRef={provided.innerRef}>
                {addressesList &&
                  addressesList.map((item, index) => {
                    return (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {
                          (provided) => (
                            <AddressForm
                              innerRef={provided.innerRef}
                              provided={provided}
                              key={item.id}
                              index={index}
                              address={item.address}
                              id={item.id}
                              handleDelete={handleDelete} />
                          )
                        }
                      </Draggable>
                    )
                  })

                }
              </AddressFormesContainer>
            )
          }
        </Droppable>
      </DragDropContext>

      <Box display='flex' justifyContent='space-between' sx={{ padding: '30px 10px 0 10px' }}  >
        <Button label='Shuffle' handleEvent={handleShuffleClick} />
        <Button label='Delete All' handleEvent={handleDeleteAll} />
      </Box>
    </Drawer>
  );
}

export default ControlPanel