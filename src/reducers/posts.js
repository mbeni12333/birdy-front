import {ADD_POST, GET_POSTS_INTIAL_DATA, REMOVE_POST} from '../actions/posts';


export function posts(state = [], action){

  switch(action.type){

    case ADD_POST:
      return [
        ...state,
        action.post
      ]
    case REMOVE_POST:
    //console.log(state.filter((el) => el._id !== action.post_id))
      return state.filter((el) => el._id !== action.post_id)
      
    case GET_POSTS_INTIAL_DATA:
        return [
          ...action.posts,
        ]

    default:
      return state;
  }
}
