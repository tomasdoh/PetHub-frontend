import React, {Component} from 'react';
import { Header, Image } from 'semantic-ui-react';
import Iframe from 'react-iframe';
import { URL } from '../constants/index'

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
    this.fetch(URL + `/pets/${this.props.match.params.id}`)
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
        <h3>{pet.description}</h3>
        <Image
        centered
        size='medium'
        src={pet.picture} />
        <Iframe url={embedUrl + encodeURI(pet.location)}
        width="450px"
        height="450px"
        display="initial"
        position="relative"
        allowFullScreen />
      </div>
    : <div>
        <p> No pets :( </p>
      </div>

  }

}

export default Pet;
