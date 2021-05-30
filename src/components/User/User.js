import React from 'react';
import {useSelector} from 'react-redux';
import classes from './User.module.css';

export default function User({id}) {
  const users = useSelector((state)=>state.users);
    if(users[id] !== undefined){
      return <div className={classes.User}><p><strong>Posted by:</strong> {users[id].name}   <strong>from</strong> {users[id].address.city}</p></div>;
    }
    else{
      return null;
    }

}
