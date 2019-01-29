import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import {
  Container,
  Icon,
  Menu
} from "semantic-ui-react";
import { connect } from "react-redux/es/connect/connect";
import { logoutUser } from '../actions/userActions';

class NavBar extends Component{
  constructor(){
    super();

    this.state={
      activeItem: "home"
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.user.id, this.props.history);
  };


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
          active={activeItem === 'newPets'}
          onClick={this.handleItemClick}>
          <Icon name="home"/>Report your missing pet
        </Menu.Item>
        {!this.props.user.isLogged &&
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/signup"
          name='signup'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}>
          <Icon name="pencil"/>Register
        </Menu.Item>
        }
        {!this.props.user.isLogged &&
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/login"
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}>
          <Icon name="sign-in"/>Login
        </Menu.Item>}
        {this.props.user.isLogged &&
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/conversations"
          name='conversations'
          active={activeItem === 'conversations'}
          onClick={this.handleItemClick}>
          <Icon name="comments"/>Forum
        </Menu.Item>}
        {this.props.user.isLogged &&
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/profile"
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}>
          <Icon name="user"/>{this.props.user.name}
        </Menu.Item>}
        {this.props.user.isLogged &&
        <Menu.Item
          className='menu__link'
          as={NavLink}
          to="/"
          name='logout'
          onClick={this.handleLogoutClick}>
          <Icon name="sign-out"/>Logout
        </Menu.Item>}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default  connect(mapStateToProps, {logoutUser})(NavBar);
