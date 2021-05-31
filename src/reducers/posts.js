import {RECEIVE_POSTS} from '../actions/posts';
import {EDIT_POST} from '../actions/posts';

export default function posts(state={}, action){
  switch(action.type){
    case RECEIVE_POSTS:
      return{
        ...state,
        ...action.posts
      };
    case EDIT_POST:
      console.log(action);
      return{
        ...state,
        ...action.posts
      }
    default: return state;
  }
}