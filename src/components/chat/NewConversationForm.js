import React from 'react';
import { URL, HEADERS } from '../../constants';
import { Form, Button } from 'semantic-ui-react';

class NewConversationForm extends React.Component {
  state = {
    title: ''
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(`${URL}/conversations`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ title: '' });
  };

  render = () => {
    return (
      <div className="newConversationForm">
      <Form>
        <Form.Field onSubmit={this.handleSubmit}>
          <br />
          <p>Start a new conversation:</p>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Topic"
          />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  };
}

export default NewConversationForm;
