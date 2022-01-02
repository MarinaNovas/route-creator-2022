import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react';

import ControlPanel from '../components/ControlPanel';

const props_1={
  address:'Химки',
  handleSetAddress:jest.fn(),
  addressesList:null,
  language:'ru',
  handleSetLanguage:jest.fn(),
  handleShuffleClick:jest.fn(),
  deleteAll:false,
  handleDeleteAll:jest.fn(),
  handleDelete:jest.fn(),
  open:true, 
  handleOpenControlPanel:jest.fn(), 
  handleJumbledAddress:jest.fn()
}

const props_2={
  address:'',
  handleSetAddress:jest.fn(),
  addressesList:[{id:'1',address:'г.Москва,Химки'}, {id:'2',address:'г.Москва,Мытищи'}, {id:'3',address:'г.Москва,Королев'}],
  language:'ru',
  handleSetLanguage:jest.fn(),
  handleShuffleClick:jest.fn(),
  deleteAll:false,
  handleDeleteAll:jest.fn(),
  handleDelete:jest.fn(),
  open:true, 
  handleOpenControlPanel:jest.fn(), 
  handleJumbledAddress:jest.fn()
}

describe('ControlPanel',()=>{
  it('should render ControlPanel',()=>{
    render(<ControlPanel {...props_1}/>);
    const label = screen.getByLabelText(/Введите адрес/i);
    expect(label).toBeInTheDocument();
  });

  it('should render addressesList',()=>{
    render(<ControlPanel {...props_2}/>);
    expect(screen.getByText(/г\.Москва,Химки/i)).toBeInTheDocument();
  });

  it('should call handleDragAndDrop',()=>{
    render(<ControlPanel {...props_2}/>);
    const node = screen.getByTestId('1');
    //fireEvent.mouseDown(node);
    //screen.debug();
    //expect(screen.getByText(/г\.Москва,Химки/i)).toBeInTheDocument();
  });

});