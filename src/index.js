import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { WS_URL } from './constants';
import { register } from './serviceWorker';


ReactDOM.render(
  <ActionCableProvider url={WS_URL}>
    <App />
  </ActionCableProvider>,
  document.getElementById('root')
);

register();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
