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
        <h3>Choose a conversation and start chatting!</h3>
        <Container>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Segment><h2><ul>{mapConversations(conversations, this.handleClick)}</ul></h2></Segment>
          </Grid.Column>
          {activeConversation ? (
            <Grid.Column>
            <Segment>
            <MessagesArea
              conversation={findActiveConversation(
                conversations,
                activeConversation
              )}
            />
              </Segment>
            </Grid.Column>
          ) : null}
          </Grid>
        <NewConversationForm />
        </Container>
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
