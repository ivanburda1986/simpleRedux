import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

export default function Post({id}) {
  const posts = useSelector((state)=>state.posts);
  const post = posts[id];
  console.log(post.userId);
  return (
    <li>
      
    {/* <Link to={"/post/"+id}>
    </Link> */}
    </li>
  )
}
