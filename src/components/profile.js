import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import PetsView from "./PetsView";
import {URL} from "../constants";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = { results: [], };
    this.getPets = this.getPets.bind(this);
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getPets()
  }

  getPets() {
    this.fetch(URL + '/pets')
      .then(data => {
        this.setState({results: data});
      });
  }
  render () {
    const {results} = this.state;
    const arr = [];
    Object.keys(results).map(function(key) {
      console.log(results[key].user_id);
      arr.push(results[key])
    });
  return (
    <Container>
      <PetsView data={arr}/>
    </Container>
  )
  }

}

export default Profile;
