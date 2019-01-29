import axios from 'axios';

import {GET_USER, ADD_USER, LOGOUT, USER_LOADING, LOGIN} from './types';

export const addUser = (user, history) => dispatch => {
  axios
    .post(window.location.protocol + '//' + window.location.hostname + ':3001/users/create', user)
    .then(res => dispatch({
      type: ADD_USER,
      payload: res.data
    }))
    .then(() => {
      history.push("/profile");
    })
};