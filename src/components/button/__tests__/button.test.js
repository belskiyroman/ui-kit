import 'jest-styled-components';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Btn } from '../button';

// it('renders without crashing', () => {
//   const tree = render(<Button />);
//   tree.unmount();
// });

it('renders without crashing', () => {
  const wrapper = shallow(<Btn>text</Btn>);
  wrapper.contains('text');
});
