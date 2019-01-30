import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap';
import GeoAutoComplete from './GeoAutoComplete'
import { URL, HEADERS } from '../constants/index'
import FileBase64 from 'react-file-base64';

class UpdatePet extends Component {
  constructor() {
    super();
    this.state = { pet: [], };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    return window.fetch(URL + `/pets/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => this.setState({ pet: data}))
      .catch(error => console.log(error))
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    data.set('fileBase64', this.state.file.base64);
    data.set('fileContentType', this.state.file.type);

    fetch(URL + `/pets/${this.props.match.params.id}`, {
      method: "PUT",
      header: HEADERS,
      body: data
    }).then(
      (response) => response.json().then(
        (json) => this.props.history.push(`/pets/${this.props.match.params.id}`)
      )
    );
  }

  getFile(file) {
    this.setState({file: file});
  }

  render() {
    const {pet} = this.state
    return (
      <Container className='App'>
        <h1>Update pet</h1>
        <Form onSubmit={this.handleSubmit} className="form">
          <Row form>
            <Col>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" autoFocus className='form-name' name="name" id="name" placeholder={pet.name} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="owner">Owner</Label>
                <Input type="text" autoFocus className='pet-owner' name="owner" id="owner" placeholder={pet.owner} />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" autoFocus className='pet-description' name="description" id="description" placeholder={pet.description} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Picture</Label>
            <FileBase64 multiple={false} onDone={this.getFile.bind(this)} placeholder={pet.fileBase64}/>
            <FormText color="muted">
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Status</Label>
            <Input type="select" name="tag" id="exampleTag" placeholder={pet.tag}>
              <option>Lost</option>
              <option>Found</option>
              <option>Reunited</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="location">Last Seen Location</Label>
            <GeoAutoComplete placeholder={pet.location}/>
          </FormGroup>

          <Button color="dark" className='button' style={{marginTop: '2rem'}} block>Report</Button>
        </Form>
      </Container>
    )
  }
}

export default UpdatePet;
