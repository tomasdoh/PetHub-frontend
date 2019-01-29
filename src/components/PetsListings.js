import React, {Component} from 'react';
import { Container, Dimmer, Loader, Divider, Card } from 'semantic-ui-react';
import PetsView from "./PetsView";

class PetsListings extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    return window.fetch('/pets')
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

export default PetsListings;
