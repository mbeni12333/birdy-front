import {GET_INITIAL_USERS} from '../actions/friends';


export function friends(state = {}, action){

  switch(action.type){

    case GET_INITIAL_USERS:
      return {
        ...action.users,
        ...state
      }

    default:
      return state;
  }
}
