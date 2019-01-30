import React, {Component} from 'react';
import { Container, Divider, Card } from 'semantic-ui-react';
import { URL } from '../constants/index'
import PetsView from "./PetsView";


class PetsListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
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

export default PetsListings;
