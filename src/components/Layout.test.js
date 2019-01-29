import React from 'react';
import Layout from './Layout';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Layout', () => {

  it('renders the layout without crashing', () => {
    const wrapper = shallow(<Layout />);

  })
})
