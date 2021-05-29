import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import classes from './App.module.css';

//React-dom
import * as ReactDOM from 'react-dom';

//React-router-dom
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import handleInitialData from '../actions/shared';

//Components
import Post from '../components/Post/Post';


function App() {
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(handleInitialData());
  },[dispatch]);

  const posts = Object.values(useSelector((state)=>state.posts));

  const displayPosts = () => {
    let postsUI = [];
    if(posts.length > 0){
      posts.map((post)=>postsUI.push(
        <Post
          key={post.id}
          id={post.id}
        />
      ))
    }
    return postsUI;
  }

  return (
    <div className={classes.App}>
      <h1>Latest comments</h1>
      <ul>
      {displayPosts()}
      </ul>
    </div>
  );
}

export default App;
