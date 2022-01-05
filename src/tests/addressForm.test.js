import React from 'react';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddressForm from '../components/AddressForm'

const props={
  innerRef:{},
  provided:{
    draggableProps:{},
    dragHandleProps:{}
  },  
  index:0,
  address:'г.Москва, Химки', 
  id:1, 
  handleDelete: jest.fn()
}
 describe('AddressForm',()=>{
  it('shpuld render AddressForm',()=>{
    render(<AddressForm {...props}/>);
    expect(screen.getByText(/г\.Москва, Химки/i)).toBeInTheDocument();
  });

  it('should delete address-form',()=>{

    render(<AddressForm {...props}/>);
    const closeBtn = screen.getByRole('button')
    userEvent.click(closeBtn);
    expect(props.handleDelete).toHaveBeenCalledTimes(1);
  });

}); 