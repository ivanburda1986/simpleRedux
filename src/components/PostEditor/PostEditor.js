import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import classes from './PostEditor.module.css';

export default function PostEditor({id}) {
  const posts  = useSelector((state)=>state.posts);
  const input = React.useRef('');
  return (
    <div>
      <h4>Edit the post bellow</h4>
      <form>
      <input className={classes.Input} ref={input}/>
      <textarea className={classes.Textarea} value={posts[id].body}></textarea>
      <button>Submit</button>
      </form>
    </div>
  )
}
