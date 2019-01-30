import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import {
  Container,
  Icon,
  Menu
} from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";
import {logoutUser} from '../actions/userActions';

class NavBar extends Component{
  constructor(){
    super();

    this.state={
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
      <Menu pointing secondary size={'massive'} stackable={true} className="top-navbar">
        <Menu.Item className="logo">
          <img src="https://www.dropbox.com/s/fn82uhwu8jawa3b/findmypet.png?raw=1" />
        </Menu.Item>
        <Menu.Item
          exact
          as={NavLink}
          to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          <Icon name="home"/>Home
        </Menu.Item>
        <Menu.Item
          exact
          as={NavLink}
          to="/pets"
          name='allPets'
          active={activeItem === 'allPets'}
          onClick={this.handleItemClick}>
          <Icon name="paw"/>Lost & Found
        </Menu.Item>

        {this.props.user.isLogged &&
        <Menu.Item
          exact
          as={NavLink}
          to="/pets/create"
          name='newPets'
          active={activeItem === 'newPets'}
          onClick={this.handleItemClick}>
          <Icon name="home"/>Report
        </Menu.Item>
        }

        {!this.props.user.isLogged &&
        <Menu.Menu position='right'>
          <Menu.Item
            exact
            as={NavLink}
            to="/signup"
            name='signup'
            active={activeItem === 'signup'}
            position='right'
            onClick={this.handleItemClick}>
            <Icon name="pencil"/>Register
          </Menu.Item>
          <Menu.Item
            exact
            as={NavLink}
            to="/login"
            name='login'
            active={activeItem === 'login'}
            position='right'
            fitted={'horizontally'}
            onClick={this.handleItemClick}>
            <Icon name="sign-in"/>Login
          </Menu.Item>
        </Menu.Menu>}

        {this.props.user.isLogged &&
        <Menu.Item
          exact
          as={NavLink}
          to="/conversations"
          name='conversations'
          active={activeItem === 'conversations'}
          onClick={this.handleItemClick}>
          <Icon name="comments"/>Forum
        </Menu.Item>}

        {this.props.user.isLogged &&
        <Menu.Menu position='right'>
          <Menu.Item
            exact
            as={NavLink}
            to="/profile"
            name='profile'
            active={activeItem === 'profile'}
            position='right'
            onClick={this.handleItemClick}>
            <Icon name="user"/>{this.props.user.name}
          </Menu.Item>
          <Menu.Item
            exact
            as={NavLink}
            to="/"
            name='logout'
            position='right'
            onClick={this.handleLogoutClick}>
            <Icon name="sign-out"/>Logout
          </Menu.Item>
        </Menu.Menu>
        }
      </Menu>
    )
  }
}


const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {logoutUser})(NavBar);

