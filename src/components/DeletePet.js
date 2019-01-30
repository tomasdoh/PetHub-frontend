import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import { URL } from '../constants/index'

class DeletePet extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [], };
  }

  componentDidMount() {
    return window.fetch(URL + `/pets/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => this.setState({ results: data}))
      .catch(error => console.log(error))
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(URL + `/pets/${this.props.match.params.id}`, {
      method: "DELETE",
      header: HEADERS,
      body: data
    }).then(
      (response) => response.json().then(
        (json) => this.props.history.push(`/pets`)
      )
    );
  }

  render () {
    const {results} = this.state;
    return (
      <Button color="dark" className='button' style={{marginTop: '2rem'}} block>
      Delete
      </Button>
    )
  }
}

export default PetsListings;
