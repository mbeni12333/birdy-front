import {ADD_POST} from '../actions/posts';


export function posts(state = {}, action){

  switch(action.type){

    case ADD_POST:
      return {
        ...action.post,
        ...state
      }

    default:
      return state;
  }
}
