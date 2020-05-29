import {API} from "../api/birdyapi"

export const GET_INITIAL_USERS = "GET_INITIAL_USERS";
export const ADD_FRIEND = "ADD_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";





export function handleAddFriend(user){
  return (dispatch) => {
    return API.addFriend(user.username)
          .then((res) => {
            //alert("Trying to add to list");
            dispatch(addFriend(user));
          })
          .catch((err) => {
            alert("Error " + JSON.stringify(err))
          })
    }
}

export function handleRemoveFriend(user){
  return (dispatch) => {
    return API.removeFriend(user.username)
          .then((res) => {
            //alert("Trying to add to list");
            dispatch(removeFriend(user));
          })
          .catch((err) => {
            //alert("Error " + JSON.stringify(err))
          })
    }
}


export function getInitialUsers(users){
  return{
    type: GET_INITIAL_USERS,
    users
  }
}


export function addFriend(user){
  //let username = user.username
  return{
    type: ADD_FRIEND,
    user
  }
}

export function removeFriend(user){
  //let username = user.username
  return{
    type: REMOVE_FRIEND,
    user
  }
}
