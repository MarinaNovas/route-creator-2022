import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputText from '../components/InputText';

const props={
  handleSetPointName:jest.fn()
}

describe('InputText',()=>{
  it('should render inputText',()=>{
    render(<InputText {...props}/>);
    expect(screen.getByLabelText(/(Введите)|(Enter)/i)).toBeInTheDocument();
  });
  it('should render input',()=>{
    render(<InputText {...props}/>);
    const textbox = screen.getByRole('textbox');
    userEvent.type(textbox,'Химки');
    expect(screen.getByDisplayValue(/Химки/i)).toBeInTheDocument();
  });


  it('handleKeyUp',()=>{
    render(<InputText {...props}/>);
    const textbox = screen.getByRole('textbox');

    fireEvent.keyUp(textbox,{
      code: 'Enter',
      key: "Enter",
      keyCode: 13
    });
    expect(props.handleSetPointName).toHaveBeenCalledTimes(1);
  });
});