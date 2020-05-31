import {API} from "../api/birdyapi"

export const ADD_POST = "ADD_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const GET_POSTS_INTIAL_DATA = "GET_POSTS_INTIAL_DATA";


export function handleAddPost(req, callback){
  return (dispatch) => {
    return API.addPost(req)
              .then((res) => {
                //alert(JSON.stringify(req))
                dispatch(addPost(req))
                callback();
              });
  }
}

export function getInitialPosts(posts){
  return {
    type: GET_POSTS_INTIAL_DATA,
    posts
  }
}

export function addPost(post){
  //alert("addpost + " + JSON.stringify(post))
  return {
    type: ADD_POST,
    post:{
      ...post,
      author_id:219
    }
  }
}

export function receivePosts(posts){
  return {
    type: RECEIVE_POST,
    posts
  }
}
