import axios from 'axios';
import { URL } from '../constants/index'

import {ADD_USER, LOGOUT, LOGIN} from './types';

export const addUser = (user, history) => dispatch => {
  axios
    .post(URL + '/users', user)
    .then(res => dispatch({
      type: ADD_USER,
      payload: res.data
    }))
    .then(() => {
      history.push("/profile");
    })
};

export const loginUser = (user, history) => dispatch => {
  axios
    .post(URL + '/users/login', user)
    .then(res => {
      localStorage.setItem('user', JSON.stringify(res.data));
      dispatch({
        type: LOGIN,
        payload: res.data
      });
    })
    .then(() => {
      history.push("/");
    })
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('user');
  dispatch({
    type: LOGOUT
  });
};