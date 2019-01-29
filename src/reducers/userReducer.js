import {ADD_USER, LOGOUT, LOGIN} from '../actions/types';
const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
  ...user,
  isLogged: !!user
};

export default function (state = initialState, action) {
  switch(action.type) {
    case LOGOUT:
      return {
        isLogged: false
      };
    case ADD_USER:
      return {
        ...state,
        ...action.payload,
        isLogged: true
      };
    case LOGIN:
      return {
        ...state,
        ...action.payload,
        isLogged: true
      };

    default:
      return state;

  }
};