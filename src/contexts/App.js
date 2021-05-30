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
import PostDetails from './PostDetails';


//DISPLAY POSTS Component
function LatestPosts () {
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

  return(
    <React.Fragment>
      <h1>Latest posts</h1>
      <ul>
        {displayPosts()}
      </ul>
    </React.Fragment>
  )
}

//APP Component
function App() {
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(handleInitialData());
  },[dispatch]);


  return (
    <BrowserRouter>
      <div className={classes.App}>
       <Switch>
         <Route path="/" exact component={LatestPosts}/>
         <Route path="/post/:id" component={PostDetails}/>
       </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
