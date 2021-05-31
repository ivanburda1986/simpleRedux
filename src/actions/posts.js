export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const EDIT_POST = "EDIT_POST";

export function receivePosts(posts){
  return{
    type: RECEIVE_POSTS,
    posts
  }
}

export function editPost(post){
  return{
    type: EDIT_POST,
    post
  }
}