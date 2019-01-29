import React from 'react';
import ConversationsList from './ConversationsList';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Chat room', () => {

  it('renders the chat room without crashing', () => {
    const wrapper = shallow(<ConversationsList />);

  })
});
