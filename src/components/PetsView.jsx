import React, {Component} from 'react';
import { Container} from 'semantic-ui-react';
import { withRouter } from 'react-router';

class PetsView extends Component {

    routeChange(id){
        let path = `/pets/${id}`;
        this.props.history.push(path);
    }

    render () {
        const results = this.props.data;
        return (
            <div id="columns">
                {results.length
                    ?
                    results.map(pet => {
                        return <figure
                            className=''
                            key={pet.id}
                            onClick={() => this.routeChange(pet.id)}
                        >
                            <img src={pet.fileBase64} />
                            <div className="ribbon">
                         <span>
                            <p className="ng-binding">{pet.tag}</p>
                        </span>
                            </div>
                            <figcaption>
                                <div className="pet-status"></div>
                                <div>Hi, my name is {pet.name}</div>
                                <div className="pet-desc">{pet.description}</div>
                            </figcaption>
                        </figure>
                    })
                    : <Container textAlign='center'>No Pets found.</Container>
                }
            </div>
        )
    }
}

export default withRouter(PetsView);