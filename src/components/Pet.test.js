import React from 'react';
import Pet from './Pet';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Pet', () => {

  it('renders each Pet page without crashing', () => {
    const wrapper = shallow(<Pet />);

  })
})
