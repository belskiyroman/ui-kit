import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../button';

it('renders without crashing', () => {
  const tree = renderer.create(<Button />);
  tree.unmount();
});
