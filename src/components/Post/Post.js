import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {BsPencil} from 'react-icons/bs';

import classes from './Post.module.css';

export default function Post({id, detail}) {
  const posts = useSelector((state)=>state.posts);
  const post = posts[id-1];

  if(post !== undefined){
    return (
      <li className={classes.Post}>
      <Link to={"/post/"+parseInt(id)}>
      <h4>{post.id}. {post.title}</h4> 
        <div className={classes.Content}><p>{detail ? post.body : post.body.substr(0,50)+"..."}</p><button><BsPencil/></button></div>
      </Link>
      </li>
    )
  } else{
    return null;
  }
  
}
