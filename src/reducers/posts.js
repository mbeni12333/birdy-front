import {ADD_POST, GET_POSTS_INTIAL_DATA} from '../actions/posts';


export function posts(state = [], action){

  switch(action.type){

    case ADD_POST:
      return [
        ...state,
        action.post
      ]
    case GET_POSTS_INTIAL_DATA:
        return [
          ...action.posts,
        ]

    default:
      return state;
  }
}
