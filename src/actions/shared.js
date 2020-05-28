import API from '../api/birdyapi';
import {getUserInitialData, GET_USER_INITIAL_DATA} from '../actions/user';


// action creator initial data
export function handleInitialData(){
  // use thunk pattern
  return (dispatch) => {
    return API.getInitialData()
          .then(({user}) => {
            dispatch(getUserInitialData(user));
          });
  }
}
