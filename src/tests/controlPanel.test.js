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

jest.mock('../components/addressForm',()=>({innerRef, provided, index, address, id, handleDelete})=>{
  mockAddressForm({provided, innerRef});
  return (
    <mock-addressForm>
      <div>{address}</div>
    </mock-addressForm>
  )
});


 describe('ControlPanel', () => {
  it('should render ControlPanel', () => {
    render(<ControlPanel {...props_2}/>);
    expect(mockAddressFormesContainer).toHaveBeenCalledTimes(1);
    expect(mockAddressForm).toHaveBeenCalledTimes(3);
  });

}); 