import React from 'react';
import SignUp from './SignUp';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Sign up form', () => {

  it('renders the sign up form without crashing', () => {
    const wrapper = shallow(<SignUp />);

  })
});
