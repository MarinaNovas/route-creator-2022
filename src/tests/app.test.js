import React from "react";
import { render, screen} from '@testing-library/react';
import App from '../App';

describe('app',()=>{

  it('ashould render AppBar',async ()=>{
    render(<App />);
    const appbar = await screen.findByText(/Route creator/i);
    expect(appbar).toBeInTheDocument();
  });
  it('should render ControlPanel',()=>{
    render(<App />);
    expect(screen.getByLabelText(/(Введите)|(Enter)/i)).toBeInTheDocument();
  });

  it('should render Buttons',()=>{
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(5);
  });
})