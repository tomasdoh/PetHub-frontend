import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './component_css/Home.css';

class Home extends Component {

    render () {
        return (
            <div className='home-main-container'>
                <p className="home-text"> With Find My Pet if you lost or found a pet you can alert local members of you community </p>
                <p className="home-text"> You will get much more visibility and the chances to get the little one home is higher </p>

                <div className='pets-lost-btn'>
                    <p className='pets-lost-link'><Link to={`/pets/lost`}>View Lost Pets</Link></p>
                </div>

                <div>
                    <div className='pets-found-btn'>
                        <p className='pets-found-link'><Link to={`/pets/found`}>View Found Pets</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
