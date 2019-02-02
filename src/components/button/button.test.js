import React from 'react';
import ReactDOM from 'react-dom';
import { Button as SUT } from './button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SUT />, div);
  ReactDOM.unmountComponentAtNode(div);
});
