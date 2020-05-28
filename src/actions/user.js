const GET_USER_INITIAL_DATA = "GET_USER_INITIAL_DATA";
const GET_USER_TOKEN = "GET_USER_TOKEN";
const LOGOUT = "LOGOUT";

function getUserInitialData(user){
  return {
    type: GET_USER_INITIAL_DATA,
    user
  }
}

function getUserToken(token){
  return {
    type: GET_USER_TOKEN,
    token
  }
}
