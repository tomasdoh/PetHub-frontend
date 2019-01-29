import React from 'react';
import Layout from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('App', () => {

  it('renders the app without crashing', () => {
    const wrapper = shallow(<App />);

  })
})
