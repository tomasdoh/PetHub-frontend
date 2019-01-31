import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Image, Icon} from 'semantic-ui-react';
import Iframe from 'react-iframe';
import {URL} from '../constants/index'
import connect from "react-redux/es/connect/connect";

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
                {this.props.user.id === pet.user_id &&
                <h4 className='update-pet'>
                    <Link to={`/pets/update/${pet.id}`}>
                        <Icon className='icon' name='edit'/>
                    </Link>
                </h4>
                }
                {this.props.user.id === pet.user_id &&
                <h4 className='delete-pet'>
                    <Link to={`/pets/delete/${pet.id}`}>
                        <Icon className='icon' name='delete'/>
                    </Link>
                </h4>
                }
                <Container className='pet-container' textAlign='center'>
                    <h1 className='pet-tag-header'>{pet.tag}</h1>
                    <div className='pet-block'>
                        <h2 className='pet-name'>Hi, my name is {pet.name}</h2>
                        <Image className='pet-image' centered size='medium' src={pet.fileBase64} alt='pet-picture'/>
                        <p className='pet-description'>{pet.description}</p>
                        <p className='pet-owner'>Please contact {this.props.user.name} for more information</p>
                    </div>
                    <div className='pet-location-block'>
                        <h2 className='location-text'>Last seen in: {pet.location}</h2>
                        <Iframe className='pet-location' url={embedUrl + encodeURI(pet.location)}
                                width="370px"
                                height="370px"
                                display="initial"
                                position="relative"
                                allowFullScreen/>
                    </div>

                </Container>
            </div>
            : <div>
                <p> No pets :( </p>
            </div>

    }

}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Pet);

