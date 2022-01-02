import React from 'react';
import { render, screen} from '@testing-library/react';

import AppBar from '../components/AppBar';

const props_1={
  handleOpenControlPanel:jest.fn(),
  handleOpenInfirmationDialog:jest.fn(),
  openControlPanel:true,
  language:'ru',
  handleSetLanguage:jest.fn()
}

const props_2={
  handleOpenControlPanel:jest.fn(),
  handleOpenInfirmationDialog:jest.fn(),
  openControlPanel:false,
  language:'ru',
  handleSetLanguage:jest.fn()
}

describe('AppBar',()=>{
  it('Should render AppBar',()=>{
    render(<AppBar {...props_1}/>);
    expect(screen.getByText(/Route creator/i)).toBeInTheDocument();
  });

  it('Should render ....',()=>{
    render(<AppBar {...props_2}/>);
    expect(screen.getByTestId(/ArrowForward/i)).toBeInTheDocument();
  });
});