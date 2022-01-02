import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import {act} from 'react-dom/test-utils';

import Hello from '../components/Hello';

let container = null;

beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a name', () => {
  act(()=>{
    render(<Hello/>, container);
  });
  expect(container.textContent).toBe('Hey, stranger');

  act(()=>{
    render(<Hello name='Marina'/>,container);
  });
  expect(container.textContent).toBe('Hello, Marina!');

  act(()=>{
    render(<Hello name = 'Gleb'/>,container);
  });
  expect(container.textContent).toBe('Hello, Gleb!');
});
