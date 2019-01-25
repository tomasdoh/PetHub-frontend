import React, {Component} from 'react';
import { Container, Dimmer, Loader, Divider, Card } from 'semantic-ui-react';

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
    this.fetch('/pets')
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
    this.fetch(`/pets/${id}`)
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
                 active={pet && pet.id === pets[key].id}
                 fluid key={key}
                 onClick={() => this.routeChange(pets[key].id)}
                 image="http://lorempixel.com/400/400/animals"
                 header={pets[key].name}
                 description={pets[key].description}
                 meta={pets[key].tag}
                 />
                 })}
             </Card.Group>
             : <Container textAlign='center'>No Pets found.</Container>
           }
           <Divider section />
       </Container>
     : <Container text>
         <Dimmer active inverted>
           <Loader content='Loading' />
         </Dimmer>
       </Container>
   }

}

export default PetsListings;
