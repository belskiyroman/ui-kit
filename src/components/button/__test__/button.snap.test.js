import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../button';


[
  {},
  { children: 'Text' },
  { children: 'Text', loading: true },
  { children: 'Text', disabled: true },
  { children: 'Text', color: 'red' },
  { children: 'Text', loading: true, disabled: true },
  { children: 'Text', color: 'red', disabled: true },
  { children: 'Text', theme: 'standard', loading: false, color: 'blue' },
  { children: 'Text', theme: 'standard', loading: true, color: 'blue' },
  { children: 'Text', theme: 'standard', loading: false, color: 'red' },
  { children: 'Text', theme: 'standard', loading: false, color: 'red', disabled: true },
  { children: 'Text', theme: 'light', loading: false, color: 'blue' },
  { children: 'Text', theme: 'light', loading: true, color: 'blue' },
  { children: 'Text', theme: 'light', loading: false, color: 'red' },
  { children: 'Text', theme: 'light', loading: false, color: 'red', disabled: true },
  { children: 'Text', theme: 'link', loading: false, color: 'blue' },
  { children: 'Text', theme: 'link', loading: true, color: 'blue' },
  { children: 'Text', theme: 'link', loading: false, color: 'red' },
  { children: 'Text', theme: 'link', loading: false, color: 'red', disabled: true },
].forEach(props =>
  it(`Check snapshot with props: ${JSON.stringify(props)}`, () => {
    const tree = renderer.create(<Button {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
);
