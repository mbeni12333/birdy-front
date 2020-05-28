export const ADD_POST = "ADD_POST";
export const GET_POSTS_INTIAL_DATA = "GET_POSTS_INTIAL_DATA";


export function addPost(post){
  return {
    type: ADD_POST,
    post
  }
}
