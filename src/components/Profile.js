import React, {Component} from 'react';
import {Container, Image} from 'semantic-ui-react';
import PetsView from "./PetsView";

class Profile extends Component {

  render () {
    const {results} = this.state;
    return (
      <Container>
        <PetsView data={results}/>
      </Container>
    )
  }

}
