import React from 'react';
import PetsForm from './PetsForm';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Pet Form', () => {

  it('renders the form without crashing', () => {
    const wrapper = shallow(<PetsForm />);

  })
});
