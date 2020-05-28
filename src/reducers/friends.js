import {GET_INITIAL_USERS} from '../actions/friends';


export function friends(state = {}, action){

  switch(action.type){

    case GET_INITIAL_USERS:
      return {
        ...action.post,
        ...state
      }

    default:
      return state;
  }
}
