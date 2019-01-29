import {GET_USER, ADD_USER, LOGOUT, USER_LOADING, LOGIN} from '../actions/types';
const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
  ...user,
  isLogged: !!user
};

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        ...action.payload,
        loading:false
      };
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
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;

  }
};