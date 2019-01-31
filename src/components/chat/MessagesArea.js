import React from 'react';
import NewMessageForm from './NewMessageForm';
import { Container, Grid } from 'semantic-ui-react';
import './chat.css'

const MessagesArea = ({
  conversation: { id, title, messages },
}) => {
  return (

    <div className="messagesArea">
      <h2>{title}</h2>
      <Container>
      <Grid>
      <Grid.Column>
      <ul><h4>{orderedMessages(messages)}</h4></ul>
      </Grid.Column>
      </Grid>
      </Container>
      <NewMessageForm conversation_id={id} />
    </div>
  );
};

export default MessagesArea;

// helpers

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return <li key={message.id}>{message.text}</li>;
  });
};
