import React, {Component} from 'react';
import { Header, Image } from 'semantic-ui-react';
import Iframe from 'react-iframe';

class Pet extends Component {
  constructor() {
    super();
    this.state = {};
    this.getPet = this.getPet.bind(this)
  }

  componentDidMount() {
    this.getPet();
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getPet() {
    this.fetch(`/pets/${this.props.match.params.id}`)
    .then(pet => {
      this.setState({pet: pet});
    })
  }

  render () {
    let {pet} = this.state;
    const embedUrl = "https://www.google.com/maps/embed/v1/place?key=" + process.env.REACT_APP_API_KEY + "&q=";
    return pet
    ? <div>
        <Header
        as='h1'
        textalign='center'>
          <Header.Content>
          {pet.name}
          </Header.Content>
        </Header>

        <Image
        centered
        size='medium'
        src="http://lorempixel.com/400/400/animals" />

        <Iframe url={embedUrl + encodeURI(pet.location)}
        width="450px"
        height="450px"
        display="initial"
        position="relative"
        allowFullScreen />

        <h2>{pet.description}</h2>

        <h3>Owned by {pet.owner} </h3>
      </div>

    : <div>
        <p> No pets :( </p>
      </div>

  }

}

export default Pet;
