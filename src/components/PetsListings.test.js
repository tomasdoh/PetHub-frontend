import React from 'react';
import PetsListings from './PetsListings';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('PetsListings', () => {

  it('renders the list of pets without crashing', () => {
    const wrapper = shallow(<PetsListings />);

  })
})
