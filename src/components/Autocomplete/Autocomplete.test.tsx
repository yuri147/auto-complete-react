import React from 'react';
import { shallow } from 'enzyme';
import Autocomplete from './Autocomplete';

describe('<Autocomplete />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Autocomplete />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
