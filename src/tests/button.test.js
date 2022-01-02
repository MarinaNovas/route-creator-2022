import React from 'react';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../components/Button';

const props={
  label:'Delete All',
  handleEvent:jest.fn()
}

describe('Button',()=>{
  it('Should render button',()=>{
    render(<Button {...props}/>);
    expect(screen.getByText('Delete All')).toBeInTheDocument();
  });

  it('Should call handleEven',()=>{
    render(<Button {...props}/>);
    const button = screen.getByText('Delete All');
    userEvent.click(button);
    expect(props.handleEvent).toBeCalledTimes(1);
  });

});