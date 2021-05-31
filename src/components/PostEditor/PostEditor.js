import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import classes from './PostEditor.module.css';

import {editPost} from '../../actions/posts';

export default function PostEditor({id}) {
  const dispatch = useDispatch();
  const posts  = useSelector((state)=>state.posts);

  const handleEditPost = (e) =>{
    e.preventDefault();
    dispatch(editPost(
      {
        ...posts[id],
      title: e.target.value,
      body: e.target.parentNode.getElementsByTagName('textarea')[0].value,
      }
    ));
  }

  return (
    <div>
      <h4>Edit the post bellow</h4>
      <form>
      <input className={classes.Input}  onChange={(e)=>handleEditPost(e)}/>
      <textarea className={classes.Textarea}></textarea>
      <button>Submit</button>
      </form>
    </div>
  )
}


// value={posts[id].body}