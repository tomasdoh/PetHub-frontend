import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import Layout from './components/Layout'
import PetsListings from './components/PetsListings';
import Pet from './components/Pet';
import Router from "react-router/Router";
import Route from "react-router/Route";
import Switch from "react-router/Switch";
import 'semantic-ui-css/semantic.min.css';
import createBrowserHistory from "history/createBrowserHistory";
import './App.css';
import PetsForm from "./components/PetsForm";
import { GoogleApiWrapper } from 'google-maps-react';
import ConversationsList from './components/chat/ConversationsList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router history={createBrowserHistory()}>
        <Layout>
          <Container>
            <Switch>
              <Route exact path="/login" />
              <Route exact path="/signup" />
              <Route exact path="/pets" component={PetsListings}/>
              <Route exact path="/pets/create" component={PetsForm}/>
              <Route exact path="/pets/lostpets" />
              <Route exact path="/pets/foundpets" />
              <Route exact path="/pets/:id" component={Pet}/>
              <Route exact path="/conversations" component={ConversationsList}/>
            </Switch>
          </Container>
        </Layout>
      </Router>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
  libraries: ['places']
})(App);
