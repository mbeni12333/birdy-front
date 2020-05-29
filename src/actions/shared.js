import {API} from '../api/birdyapi';
import {getUserInitialData, GET_USER_INITIAL_DATA} from '../actions/user';
import {getInitialUsers, GET_INITIAL_USERS} from '../actions/friends';

// action creator initial data
export function handleInitialData(){
  // use thunk pattern
  return (dispatch) => {
    return API.getUserInitialData()
          .then(({data, users}) => {
            dispatch(getUserInitialData(data));
            dispatch(getInitialUsers(users));
          });
  }
}