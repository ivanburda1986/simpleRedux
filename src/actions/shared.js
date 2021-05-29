import {getInitialData} from '../utils/api';

import {receivePosts} from './posts';
import {receiveUsers} from './users';

export default function handleInitialData(){
  return async (dispatch) => {
    let response = await getInitialData();
    dispatch(receiveUsers(response.users));
    dispatch(receivePosts(response.posts));
  }
}
