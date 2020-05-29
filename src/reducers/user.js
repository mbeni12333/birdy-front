import {GET_USER_INITIAL_DATA} from '../actions/user';
import {ADD_FRIEND, REMOVE_FRIEND} from '../actions/friends';

export function user(state = {}, action){

  switch(action.type){

    case GET_USER_INITIAL_DATA:
      return {
        ...action.user
      }
    case ADD_FRIEND:
      return{
        ...state,
        friends: [...state.friends, {...action.user}]
      }

    case REMOVE_FRIEND:
      return{
        ...state,
        friends: state.friends.filter((user) => user.id !== action.user.id)
      }
    default:
      return state;
  }
}
