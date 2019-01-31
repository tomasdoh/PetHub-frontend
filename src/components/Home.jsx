import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import './component_css/Home.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

const items = [
    {
        src: 'http://www.radiopetlady.com/wp-content/uploads/bfi_thumb/slider-90064666-6di88yn2vf5aiuu9dqgainhhhbad0a2pn7vvq55bdf0.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'http://www.radiopetlady.com/wp-content/uploads/bfi_thumb/slider-pets-6di88yn2vf5aiuu9dqgainhhhbad0a2pn7vvq55bdf0.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'http://www.radiopetlady.com/wp-content/uploads/bfi_thumb/slider-95896654-6di88yn2vf5aiuu9dqgainhhhbad0a2pn7vvq55bdf0.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render () {
        const {activeIndex} = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                    className='listbox'
                >
                    <img src={item.src} alt={item.altText}/>
                </CarouselItem>
            );
        });

        return (
            <Container>
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
            </Carousel>

                <div className='home-main-container'>
                    <p className="home-text"> With Find My Pet if you lost or found a pet you can alert local members of you community </p>
                    <p className="home-text"> You will get much more visibility and the chances to get the little one home is higher </p>
                    <div className='home-btns'>
                        <div className='lost-btn'>
                            <Button outline color="secondary">
                                <Link className='home-link' to={`/pets/lost`}>View Lost Pets</Link>
                                <p className='lost-link-descr'>See all lost pets close to your location </p>
                            </Button>{' '}
                        </div>
                        <div className='found-btn'>
                            <Button outline color="secondary">
                                <Link className='home-link' to={`/pets/found`}>View Found Pets</Link>
                                <p className='found-link-descr'>See all pets that were found close to your location </p>
                            </Button>{' '}
                        </div>
                    </div>
                </div>
        </Container>
    );
    }
}

export default Home;
