import React, { Component } from 'react';
import {Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import '../App.css';

import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';
import {Link} from 'react-router-dom'

class SignUp extends Component {
  state = {
    name: '', //a form input needs to have a redux state inside component
    email: '',
    password_digest: ''
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password_digest: this.state.password_digest
    };
    //Add name via addUser action
    this.props.addUser(newUser, this.props.history);
  };

  render() {
    return (
      <Container className="App">
        <div className="signup-header">
          <h2 >We want to help the little one find its family</h2>
          <h2>Please sign up first</h2>
        </div>
        <Form onSubmit={this.onSubmit} className="form">
          <Col>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="name"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="myemail@email.com"
                value={this.state.email}
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password_digest"
                placeholder="********"
                value={this.state.password}
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Button color="dark" style={{marginTop: '2rem'}} block>Sign Up</Button>
        </Form>
        <p className="already-signed-up">Already signed up? <Link to="/login">Login</Link></p>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});


export default connect(mapStateToProps, {addUser})(SignUp);