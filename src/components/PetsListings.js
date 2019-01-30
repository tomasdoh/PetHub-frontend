import React, {Component} from 'react';
import { Container, Divider, Card } from 'semantic-ui-react';
import { URL } from '../constants/index'

class PetsListings extends Component {
  constructor() {
    super();
    this.state = {};
    this.getPets = this.getPets.bind(this);
    this.getPet = this.getPet.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange(id){
    let path = `/pets/${id}`;
    this.props.history.push(path);
  }

  componentDidMount() {
    this.getPets();
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getPets() {
    this.fetch(URL + '/pets')
      .then(pets => {
        if (pets.length) {
          this.setState({pets: pets});
          this.getPet(pets[0].id)
        } else {
          this.setState({pets: []})
        }
      })
  }

  getPet(id) {
    this.fetch(URL +`/pets/${id}`, {
    })
    .then(pet => this.setState({pet: pet}))
  }

  render () {
   let {pets, pet} = this.state;
     return pet
       ? <Container text>
           <Divider hidden section />
           {pets && pets.length
             ? <Card.Group itemsPerRow={2}>
               {Object.keys(pets).map((key) => {
                 return <Card
                   className='card-container'
                 fluid key={key}
                 onClick={() => this.routeChange(pets[key].id)}
                 image={pets[key].fileBase64}
                 header={'Hi, my name is ' + pets[key].name}
                 description={ pets[key].description}
                 meta={'Status: ' + pets[key].tag}
                 />
                 })}
             </Card.Group>
             : <Container textAlign='center'>No Pets found.</Container>
           }
           <Divider section />
       </Container>
     : <Container text>
         No Pets found.
       </Container>
   }

}

export default PetsListings;
