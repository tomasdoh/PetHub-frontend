import React, {Component} from "react";
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {loginUser} from '../actions/userActions';
import {connect} from 'react-redux';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  };
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email || undefined,
      password: this.state.password || undefined
    };
    this.props.loginUser(user, this.props.history);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Form onSubmit={this.onSubmit} className="form">
          <Row form>
            <Col>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email" onChange={this.onChange} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password_digest" id="password_digest" placeholder="Password" onChange={this.onChange} />
              </FormGroup>
            </Col>
          </Row>
          <Button color="dark" style={{marginTop: '2rem'}} block>Login</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});


export default  connect(mapStateToProps, {loginUser})(Login);
