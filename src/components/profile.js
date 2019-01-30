import React, {Component} from 'react';
import {Container, Image} from 'semantic-ui-react';
import PetsView from "./PetsView";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = { results: [], };
    console.log(this.state)
  }

  componentDidMount() {
    return window.fetch(`${URL}/pets`)
      .then(response => response.json())
      .then(data => this.setState({ results: data}))
      .catch(error => console.log(error))
  }

  render () {
    const {results} = this.state;
    return (
      <Container>
        <PetsView data={results}/>
      </Container>
    )
  }
}


export default Profile;
