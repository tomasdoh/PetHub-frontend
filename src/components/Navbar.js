import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import {
  Container,
  Icon,
  Menu
} from "semantic-ui-react";

class NavBar extends Component{
 constructor(){
    super();

    this.state={
        activeItem: "home"
    }
}
handleItemClick = (e, { name }) => this.setState({ activeItem: name });


render() {
const { activeItem } = this.state;

return (
    <Container className='menu'>
        <Menu.Item className='menu__link'>
          PetHub
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          <Icon name="home"/>Home
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/pets"
          name='allPets'
          active={activeItem === 'allPets'}
          onClick={this.handleItemClick}>
          <Icon name="paw"/>View lost and found pets
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/pets/create"
          name='newPets'
          active={activeItem === 'newPets'}
          onClick={this.handleItemClick}>
          <Icon name="home"/>Report your missing pet
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/signup"
          name='signup'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}>
          <Icon name="pencil"/>Register
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/login"
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}>
          <Icon name="sign-in"/>Login
        </Menu.Item>
    </Container>
    )
  }
}
export default NavBar;
