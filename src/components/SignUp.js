import React, {Component} from 'react'
import { Form, Input} from 'semantic-ui-react'

class SignUp extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch(window.location.protocol + '//' + window.location.hostname + ':3001/users/create', {
      method: 'POST',
      body: data,
    }).then(
      (response) => response.json().then(
        this.props.history.push('/')
      )
    );
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field required>
          <label>Name</label>
          <Input name="name" placeholder='Name'/>
        </Form.Field>
        <Form.Field required>
          <label>Email</label>
          <Input type="email" name="email" placeholder='Email'/>
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <Input type="password" name="password_digest" placeholder='Password'/>
        </Form.Field>
        <Form.Button content='Submit' />
      </Form>
    )
  }
}

export default SignUp;