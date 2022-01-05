import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddressFormesContainer from '../components/AddressFormesContainer';



const props_1 ={
  handleJumbledAddress:jest.fn(),
  addressesList:[1,2,3]
};

const props_2 ={
  handleJumbledAddress:jest.fn(),
  addressesList:[1,2,3],
  provided:{
    dataRbdDroppableId: 'addresses',
    dataRbdDroppableContextId:0
  }
};

describe('AddressFormesContainer',()=>{
  it('should be render AddressFormesContainer',()=>{
    render(<AddressFormesContainer {...props_1}/>);
    expect(screen.queryByText(/Элемент/i)).not.toBeInTheDocument();
  });

  it('should be render childre',()=>{
    render(
    <AddressFormesContainer {...props_1}>
      <div>
        <h1>Элемент 1</h1>
      </div>
      <div>
        <h1>Элемент 2</h1>
      </div>
      <div>
        <h1>Элемент 3</h1>
      </div>
    </AddressFormesContainer>
    );
    expect(screen.getAllByText(/Элемент/i)).toHaveLength(3);
  });

  it('should be call handleJumbledAddress',async()=>{
    render(
      <AddressFormesContainer {...props_2}>
        <div data-testid='1'>
          <h1>Элемент 1</h1>
        </div>
        <div data-testid='2'>
          <h1>Элемент 2</h1>
        </div>
        <div data-testid='3'>
          <h1>Элемент 3</h1>
        </div>
      </AddressFormesContainer>
      );

  });

}); 