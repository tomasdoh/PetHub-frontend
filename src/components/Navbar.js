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
          active={activeItem === 'home'}>
          <Icon name="home"/>Home
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/pets"
          name='allPets'
          active={activeItem === 'allPets'}>
          <Icon name="paw"/>View All
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/pets/lost"
          name='lostPets'
          active={activeItem === 'lostPets'}>
          <Icon name="paw"/>View Lost
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/pets/found"
          name='foundPets'
          active={activeItem === 'foundPets'}>
          <Icon name="paw"/>View Found
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/pets/create"
          name='newPets'
          active={activeItem === 'newPets'}>
          <Icon name="home"/>Report your missing pet
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/users/new"
          name='register'
          active={activeItem === 'register'}>
          <Icon name="pencil"/>Register
        </Menu.Item>
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/login"
          name='login'
          active={activeItem === 'login'}>
          <Icon name="sign-in"/>Login
        </Menu.Item>
    </Container>
    )
  }
}
export default NavBar;
