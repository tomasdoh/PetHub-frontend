//API URLs for Production
// export const SHORT_URL = "pet-hub-api.herokuapp.com";
// export const WS_SHORT_URL = 'pet-hub-api.herokuapp.com/cable';

//API URL for Local/Development
export const SHORT_URL = 'localhost:3001';
export const WS_SHORT_URL = 'localhost:3001/cable';

export const URL = "http://" + SHORT_URL;
export const WS_URL = "wss://" + WS_SHORT_URL;


export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
