import React, {Component} from 'react';
import { Container, Dimmer, Loader, Divider, Card } from 'semantic-ui-react';
import { Router, Route, IndexRoute, withRouter } from 'react-router';

class PetsView extends Component {

  constructor() {
    super();
    this.state = { results: [], };
  }

  routeChange(id){
    let path = `/pets/${id}`;
    this.props.history.push(path);
  }

  render () {
    this.state.results = this.props.data
    const {results} = this.state;
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


// {results.map(pet => 
//     <li key={pet.id}>
//       <a href={pet.name}>{pet.name}</a>
//     </li>
//     )}