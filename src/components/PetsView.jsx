import React, {Component} from 'react';
import { Container, Dimmer, Loader, Divider, Card } from 'semantic-ui-react';

class PetsView extends Component {

  constructor() {
    super();
    this.state = { results: [], };
  }

  render () {
    return ( pet
      <Container>
        <Divider hidden section />
          {results.length
             ? <Card.Group itemsPerRow={2}>
               {results.map(pet => {
                 return <Card
                 fluid key={pet.id}
                 image={pet.picture}
                 header={pet.name}
                 description={pet.description}
                 meta={pet.tag}
                 />
                 })}
             </Card.Group>
             : <Container textAlign='center'>No Pets found.</Container>
          }
        <Divider section />

      </Container>
     )
  }
}

export default PetsView;


// {results.map(pet => 
//     <li key={pet.id}>
//       <a href={pet.name}>{pet.name}</a>
//     </li>
//     )}