import React, {Component} from 'react';
import { Container, Divider, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router';

class PetsView extends Component {

  routeChange(id){
    let path = `/pets/${id}`;
    this.props.history.push(path);
  }

  render () {
    const results = this.props.data;
    return ( 
      <Container>
        <Divider hidden section />
          {results.length
             ? <Card.Group itemsPerRow={2}>
               {results.map(pet => {
                 return <Card
                 fluid key={pet.id}
                 onClick={() => this.routeChange(pet.id)}
                 image={pet.fileBase64}
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

export default withRouter(PetsView);