import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import ControlPanel from '../components/ControlPanel';

const props_1 = {
  address: 'Химки',
  handleSetAddress: jest.fn(),
  addressesList: null,
  language: 'ru',
  handleSetLanguage: jest.fn(),
  handleShuffleClick: jest.fn(),
  deleteAll: false,
  handleDeleteAll: jest.fn(),
  handleDelete: jest.fn(),
  open: true,
  handleOpenControlPanel: jest.fn(),
  handleJumbledAddress: jest.fn()
}

const props_2 = {
  address: '',
  handleSetAddress: jest.fn(),
  addressesList: [{ id: '1', address: 'г.Москва,Химки' }, { id: '2', address: 'г.Москва,Мытищи' }, { id: '3', address: 'г.Москва,Королев' }],
  language: 'ru',
  handleSetLanguage: jest.fn(),
  handleShuffleClick: jest.fn(),
  deleteAll: false,
  handleDeleteAll: jest.fn(),
  handleDelete: jest.fn(),
  open: true,
  handleOpenControlPanel: jest.fn(),
  handleJumbledAddress: jest.fn()
}

/* jest.mock('react-beautiful-dnd', () => ({
  Droppable: ({ children }) => children({
    draggableProps: {
      style: {},
    },
    innerRef: jest.fn(),
  }, {}),
  Draggable: ({ children }) => children({
    draggableProps: {
      style: {},
    },
    innerRef: jest.fn(),
  }, {}),
  DragDropContext: ({ children }) => children,
})); */

/*  Droppable: jest.fn(({children})=>(
   <div data-testid='droppable'>
     {children({
       draggableProps:{
         style: {},
       },
       innerRef: jest.fn(),
     })}
   </div>
 )),
 Draggable: jest.fn(({children})=>(
   <div data-testid='draggable'>
     {children({
       draggableProps:{
         style: {},
       },
       innerRef: jest.fn(),
     })}
   </div>
 )),
  */

/* jest.mock('react-beautiful-dnd', () => ({
  DragDropContext: (({ children }) => (
    <div data-testid='dragg-drop-context'>{children}</div>
  )),
  Droppable: ({ children }) => children({
    draggableProps: {
      style: {},
    },
    innerRef: jest.fn(),
  }, {}),
}));
 */

const mockAddressFormesContainer=jest.fn();
jest.mock('../components/AddressFormesContainer',()=>({provided, innerRef,children})=>{
  mockAddressFormesContainer({provided, innerRef});
  return (
    <mock-AddressFormesContainer>
      {children}
    </mock-AddressFormesContainer>
  )
});



const mockAddressForm = jest.fn();

jest.mock('../components/addressForm',()=>({provided, innerRef,children})=>{
  mockAddressForm({provided, innerRef});
  return (
    <mock-addressForm>
      {children}
    </mock-addressForm>
  )
});


/* describe('ControlPanel', () => {
  it('should render ControlPanel', () => {
    render(<ControlPanel {...props_2}/>);
    expect(mockAddressFormesContainer).toHaveBeenCalledTimes(1);
    expect(mockAddressForm).toHaveBeenCalledTimes(3);

  });

}); */