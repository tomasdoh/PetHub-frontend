import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Container, Image} from 'semantic-ui-react';
import Iframe from 'react-iframe';
import {URL} from '../constants/index'

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

  render() {
    let {pet} = this.state;
    const embedUrl = "https://www.google.com/maps/embed/v1/place?key=" + process.env.REACT_APP_API_KEY + "&q=";
    return pet
      ? <div>
        <Container className='pet-container'  textAlign='center'>
          <h1 className='pet-tag-header'>{pet.tag}</h1>
          <h2 className='pet-name'>Hi, my name is {pet.name}</h2>
          <Image  className='pet-image' centered size='medium' src={pet.fileBase64} alt='pet-picture'/>
          <p className='pet-description'>{pet.description}</p>
          <h4><Link to={`/pets/update/${pet.id}`}>Update</Link></h4>
          <h4><Link to={`/pets/delete/${pet.id}`}>Delete</Link></h4>
          <h2 className='location-text'>Last seen in: {pet.location}</h2>
          <Iframe className='pet-location' url={embedUrl + encodeURI(pet.location)}
                  width="450px"
                  height="450px"
                  display="initial"
                  position="relative"
                  allowFullScreen/>
        </Container>
      </div>
      : <div>
        <p> No pets :( </p>
      </div>

  }

}

export default Pet;
