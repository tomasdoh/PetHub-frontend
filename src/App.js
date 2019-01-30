import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import Layout from './components/Layout'
import PetsListings from './components/PetsListings';
import Pet from './components/Pet';
import UpdatePet from './components/UpdatePet';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import Router from "react-router/Router";
import Route from "react-router/Route";
import Switch from "react-router/Switch";
import 'semantic-ui-css/semantic.min.css';
import createBrowserHistory from "history/createBrowserHistory";
import './App.css';
import PetsForm from "./components/PetsForm";
import { GoogleApiWrapper } from 'google-maps-react';
import ConversationsList from './components/chat/ConversationsList';
import Filter from "./components/Filter";
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <div className="App">
        <Router history={createBrowserHistory()}>
          <Layout>
            <Container>
              <Switch>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/pets" component={PetsListings}/>
                <Route exact path="/pets/create" component={PetsForm}/>
                <Route exact path="/pets/update/:id" component={UpdatePet}/>
                <Route exact path="/pets/lost" component={() => <Filter tag="Lost"/>} />
                <Route exact path="/pets/found" component={() => <Filter tag="Found"/>} />
                <Route exact path="/pets/:id" component={Pet}/>
                <Route exact path="/conversations" component={ConversationsList}/>
              </Switch>
            </Container>
          </Layout>
        </Router>
        </div>
      </Provider>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
  libraries: ['places']
})(App);
