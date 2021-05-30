import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import classes from './PostDetails.module.css';

import Post from '../components/Post/Post';
import User from '../components/User/User';
import PostEditor from '../components/PostEditor/PostEditor';


//POST DETAILS Component
export default function PostDetails() {
  const {id} = useParams();
  const [showEditor, setShowEditor] = React.useState(false);
  const posts  = useSelector((state)=>state.posts);
  console.log("POSTS: ", posts);

    return (
      <div className={classes.PostDetails}>
        <User
          id={posts[id].userId}
        />
        <Post
          id={id}
          detail={true}
          click={()=>setShowEditor(!showEditor)}
        />
        {showEditor?<PostEditor id={id-1}/>:null}
  
      </div>
    )

}
