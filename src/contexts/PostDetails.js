import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import classes from './PostDetails.module.css';

import Post from '../components/Post/Post';


//POST DETAILS Component
export default function PostDetails() {
  const {id} = useParams();
  const posts  = useSelector((state)=>state.posts);
  const users  = useSelector((state)=>state.users);


  return (
    <div>
      <Post
        id={id}
        full={true}
      />
    </div>
  )
}
