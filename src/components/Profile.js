import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import PetsView from "./PetsView";
import {URL} from "../constants";
import connect from "react-redux/es/connect/connect";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
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
        this.setState({pets: data});
      });
  }

  render () {
    const pets = this.state.pets;
    const users_pet = [];
    pets.map(pet => {
      if (pet.user_id === this.props.user.id) {
        users_pet.push(pet);
      }
      return null
    });

    return (
      <Container>
        <PetsView data={users_pet}/>
      </Container>
    )
  }

}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Profile);
