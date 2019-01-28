import React, {Component} from 'react';
import { Container, Dimmer, Loader, Divider, Card } from 'semantic-ui-react';

class Filter extends Component {

  constructor() {
    super();
    this.state = {};
    this.getPets = this.getPets.bind(this);
    this.getPet = this.getPet.bind(this);
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
    // this.fetch('/pets')
    var fetchUrl = '/pets'
    if (this.props.tag !== null) {
      fetchUrl += '?tag=' + this.props.tag;
    }
    this.fetch(fetchUrl)
      .then(pets => {
        if (pets.length) {
          this.setState({pets: pets});
          this.getPet(pets[0].id)
        } else {
          this.setState({pets: []});
        }
      })
  }

  getPet(id) {
    this.fetch(`/pets/${id}`)
      .then(pet => this.setState({pet: pet}))
  }

  render () {
    let {pets, pet} = this.state;
     return pets
       ? <Container text>
           <Divider hidden section />
           {pets && pets.length
             ? <Card.Group itemsPerRow={2}>
               {Object.keys(pets).map((key) => {
                  return <Card
                  fluid key={key}
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

export default Filter;
