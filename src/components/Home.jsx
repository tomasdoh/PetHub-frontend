import React, {Component} from 'react';
import { Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './component_css/Home.css';

class Home extends Component {

  render () {
    return (
      <Container>
        <p id="hoho"> ha </p>

        <button>
          <Link to={`/pets/lost`}>View Lost Pet</Link>
        </button>

        <button>
          <Link to={`/pets/found`}>View Found Pet</Link>
        </button>

        <p> ah </p>
      </Container>
    )
  }
}

export default Home;
