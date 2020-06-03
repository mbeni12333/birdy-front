import {API} from "../api/birdyapi"

export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const GET_POSTS_INTIAL_DATA = "GET_POSTS_INTIAL_DATA";


export function handleAddPost(req, user_id, callback){
  return (dispatch) => {
    return API.addPost(req)
              .then((res) => {
                //alert(JSON.stringify(res))
                dispatch(addPost(req, res.post_id, user_id))
                callback();
              });
  }
}

export function handleRemovePost(post_id){
  return (dispatch) => {
    return API.removePost(post_id)
              .then((res) => {
                //alert(JSON.stringify(req))
                dispatch(removePost(post_id))
              });
  }
}
export function getInitialPosts(posts){
  return {
    type: GET_POSTS_INTIAL_DATA,
    posts
  }
}

export function addPost(post, _id, author_id){
  //alert("addpost + " + JSON.stringify(post))
  return {
    type: ADD_POST,
    post:{
      ...post,
      _id,
      author_id
    }
  }
}

export function removePost(post_id){
  //alert("addpost + " + JSON.stringify(post))
  return {
    type: REMOVE_POST,
    post_id
  }
}

export function receivePosts(posts){
  return {
    type: RECEIVE_POST,
    posts
  }
}
