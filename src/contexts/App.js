import React from 'react';
import {userSelector, useDispatch} from 'react-redux';

import classes from './App.module.css';

//React-dom
import * as ReactDOM from 'react-dom';

//React-router-dom
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import handleInitialData from '../actions/shared';


function App() {
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(handleInitialData());
  },[dispatch]);

  return (
    <div className={classes.App}>
      <h1>Latest comments</h1>
    </div>
  );
}

export default App;
