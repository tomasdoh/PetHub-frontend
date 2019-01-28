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
    <Container className='menu borderless'>
        <Menu.Item className='menu__link menu_home'
          as={NavLink}
          to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          <Icon name="home"/>Home
        </Menu.Item>
        <Menu.Item className='menu__link menu_lost_and_found'
          as={NavLink}
          to="/pets"
          name='allPets'
          onClick={this.handleItemClick}>
          <Icon name="paw"/>Lost and found pets
        </Menu.Item>
        <Menu.Item className='menu__link menu_missing_pets'
          as={NavLink}
          to="/pets/create"
          name='newPets'
          onClick={this.handleItemClick}>
          <Icon name="edit outline"/>Report missing pet
        </Menu.Item>
        <Menu.Item className='menu__link menu_register'
          as={NavLink}
          to="/users/new"
          name='register'
          onClick={this.handleItemClick}>
          <Icon name="pencil"/>Join the community
        </Menu.Item>
        <Menu.Item className='menu__link menu_login'
          as={NavLink}
          to="/login"
          name='login'
          onClick={this.handleItemClick}>
          <Icon name="sign-in"/>Hey! Welcome back
        </Menu.Item>
    </Container>
    )
  }
}
export default NavBar;
