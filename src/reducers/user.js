import {GET_USER_INITIAL_DATA} from '../actions/user';


export function user(state = {}, action){

  switch(action.type){

    case GET_USER_INITIAL_DATA:
      return {
        ...action.user
      }

    default:
      return state;
  }
}
