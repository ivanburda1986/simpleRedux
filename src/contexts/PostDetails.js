import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import classes from './PostDetails.module.css';

import Post from '../components/Post/Post';
import User from '../components/User/User';


//POST DETAILS Component
export default function PostDetails() {
  const {id} = useParams();
  const posts  = useSelector((state)=>state.posts);

  return (
    <div className={classes.PostDetails}>
      <User
        id={posts[id].userId}
      />
      <Post
        id={id}
        detail={true}
      />

    </div>
  )
}
