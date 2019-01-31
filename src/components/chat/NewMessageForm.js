import React from 'react';
import { URL, HEADERS } from '../../constants';
import { Form, Button } from 'semantic-ui-react'

class NewMessageForm extends React.Component {
  state = {
    text: '',
    conversation_id: this.props.conversation_id
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ conversation_id: nextProps.conversation_id });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${URL}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ text: '' });
  };

  render = () => {
    return (
      <div className="newMessageForm">
        <Form onSubmit={this.handleSubmit}>
          <label>New message:</label>
          <br />
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <Button type="submit" value="Submit"/>
        </Form>
      </div>
    );
  };
}

export default NewMessageForm;
