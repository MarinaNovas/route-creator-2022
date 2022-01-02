import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DialogWindow from '../components/DialogWindow';

const props_1 = {
  open:false,
  handleOpenInfirmationDialog:jest.fn()
}

const props_2 = {
  open:true,
  handleOpenInfirmationDialog:jest.fn()
}

describe('DialogWindow',()=>{
  it("shouldn't render DialogWindow", ()=>{
    render(<DialogWindow {...props_1}/>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it("should render DialogWindow", ()=>{
    render(<DialogWindow {...props_2}/>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  
});
