import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddressFormesContainer from '../components/AddressFormesContainer';



const props ={
  handleJumbledAddress:jest.fn(),
  addressesList:[1,2,3]
}

describe('AddressFormesContainer',()=>{
  it('should be render AddressFormesContainer',()=>{
    render(<AddressFormesContainer {...props}/>);
    expect(screen.queryByText(/Элемент/i)).not.toBeInTheDocument();
  });

  it('should be render childre',()=>{
    render(
    <AddressFormesContainer {...props}>
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
      <AddressFormesContainer {...props}>
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
    
    const node_1 = screen.getByTestId(/1/i);
    const node_2 = screen.getByTestId(/2/i);

    await fireEvent.dragStart(node_1);
    //await expect(props.handleDragStart).toHaveBeenCalledTimes(1);
    //await fireEvent.dragEnter(node_2);
    //await fireEvent.dragEnd(node_2);

  });

});