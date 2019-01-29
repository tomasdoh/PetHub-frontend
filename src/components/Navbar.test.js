import React from 'react';
import NavBar from './Navbar';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Sign up form', () => {

  it('renders the nav bar without crashing', () => {
    const wrapper = shallow(<NavBar />);

  })
});
