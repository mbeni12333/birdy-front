export const GET_INITIAL_USERS = "GET_INITIAL_USERS";


export function getInitialUsers(users){
  return{
    type: GET_INITIAL_USERS,
    users
  }
}
