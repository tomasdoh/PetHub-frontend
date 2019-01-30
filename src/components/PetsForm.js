import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap';
import GeoAutoComplete from './GeoAutoComplete'
import { URL, HEADERS } from '../constants/index'
import FileBase64 from 'react-file-base64';
import connect from "react-redux/es/connect/connect";

function validate(name, file) {
  // true means invalid, so our conditions got reversed
  return {
    name: name.length === 0,
    file: file.length ===0
  };
}

class PetsForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.state = {
      name: '',
      file: '',
    };
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  // canBeSubmitted() {
  //   const errors = validate(this.state.name);
  //   const isDisabled = Object.keys(errors).some(x => errors[x]);
  //   return !isDisabled;
  // }


  handleSubmit(event) {

    // if (!this.canBeSubmitted()) {
    //   event.preventDefault();
    //   alert(`something`);
    //   return;
    // }

    event.preventDefault();
    const data = new FormData(event.target);
    data.set('user_id', this.props.user.id);
    data.set('fileBase64', this.state.file.base64);
    data.set('fileContentType', this.state.file.type);

    fetch(URL + '/pets', {
      method: "POST",
      header: HEADERS,
      body: data
    }).then(
      (response) => response.json().then(
        (json) => this.props.history.push('/pets/' + json.id)
      )
    );
  }

  getFile(file) {
    this.setState({file: file});
  }

  render() {
    const errors = validate(this.state.name, this.state.file);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <Container className='App'>
        <h1>Enter your pet information</h1>
        <Form onSubmit={this.handleSubmit}  className="form" id='petform'>
          <Row form>
            <Col>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input  type="text" autoFocus className='form-name' 
                        name="name" id="name" placeholder="Pet name" 
                        value={this.state.name}
                        onChange={this.handleNameChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="owner">Owner</Label>
                <Input type="text" autoFocus className='pet-owner' name="owner" id="owner" placeholder="Your name" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" autoFocus className='pet-description' name="description" id="description" placeholder="Describe the pet"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Picture</Label>
            <FileBase64 multiple={false} onDone={this.getFile.bind(this)}/>
            <FormText color="muted">
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Status</Label>
            <Input type="select" name="tag" id="exampleTag">
              <option>Lost</option>
              <option>Found</option>
              <option>Reunited</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="location">Last Seen Location</Label>
            <GeoAutoComplete />
          </FormGroup>
          <Button color="dark" className='button' style={{marginTop: '2rem'}} block disabled={isDisabled}>Report</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(PetsForm);
