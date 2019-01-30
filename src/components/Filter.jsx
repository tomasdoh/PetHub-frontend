import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import { URL } from '../constants/index'
import PetsView from "./PetsView";

class Filter extends Component {

  constructor() {
    super();
    this.state = { results: [], };
  }

  componentDidMount() {
    var fetchUrl = `${URL}/pets`
    if (this.props.tag !== null) {
      fetchUrl += '?tag=' + this.props.tag;
    }
    return window.fetch(fetchUrl)
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

export default Filter;
