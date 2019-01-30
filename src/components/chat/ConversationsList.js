import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { URL } from '../../constants';
import NewConversationForm from './NewConversationForm';
import MessagesArea from './MessagesArea';
import Cable from './Cables';
import './chat.css';
import { Segment, Container, Grid } from 'semantic-ui-react';

class ConversationsList extends React.Component {
  state = {
    conversations: [],
    activeConversation: null
  };

  componentDidMount = () => {
    fetch(`${URL}/conversations`)
      .then(res => res.json())
      .then(conversations => this.setState({ conversations }));
  };

  handleClick = id => {
    this.setState({ activeConversation: id });
  };

  handleReceivedConversation = response => {
    const { conversation } = response;
    this.setState({
      conversations: [...this.state.conversations, conversation]
    });
  };

  handleReceivedMessage = response => {
    const { message } = response;
    const conversations = [...this.state.conversations];
    const conversation = conversations.find(
      conversation => conversation.id === message.conversation_id
    );
    conversation.messages = [...conversation.messages, message];
    this.setState({ conversations });
  };

  render = () => {
    const { conversations, activeConversation } = this.state;
    return (
      <div className="conversationsList">
        <ActionCableConsumer
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={this.handleReceivedConversation}
        />
        {this.state.conversations.length ? (
          <Cable
            conversations={conversations}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <h1>Forum</h1>
        <Container>
        <Grid columns={1} stackable>
          <Grid.Column>
            <Segment><h2><ul><u>{mapConversations(conversations, this.handleClick)}</u></ul></h2></Segment>
          </Grid.Column>
          </Grid>
        <NewConversationForm />
        </Container>
        {activeConversation ? (
          <Grid.Column>
          <MessagesArea
            conversation={findActiveConversation(
              conversations,
              activeConversation
            )}
          />
          </Grid.Column>
        ) : null}
      </div>
    );
  };
}

export default ConversationsList;

// helpers

const findActiveConversation = (conversations, activeConversation) => {
  return conversations.find(
    conversation => conversation.id === activeConversation
  );
};

const mapConversations = (conversations, handleClick) => {
  return conversations.map(conversation => {
    return (
      <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
        {conversation.title}
      </li>
    );
  });
};
