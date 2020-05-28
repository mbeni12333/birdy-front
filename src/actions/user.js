export const GET_USER_INITIAL_DATA = "GET_USER_INITIAL_DATA";
export const SET_USER_TOKEN = "SET_USER_TOKEN";
export const LOGOUT = "LOGOUT";

export function getUserInitialData(user){
  return {
    type: GET_USER_INITIAL_DATA,
    user
  }
}

export function setUserToken(token){
  return {
    type: SET_USER_TOKEN,
    token
  }
}
