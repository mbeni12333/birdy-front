import {API, UnsetAutorozationToken} from '../api/birdyapi';
import {getUserInitialData, GET_USER_INITIAL_DATA, logout} from '../actions/user';
import {getInitialUsers, GET_INITIAL_USERS} from '../actions/friends';
import {getInitialPosts, GET_POSTS_INTIAL_DATA} from '../actions/posts';

// action creator initial data
export function handleInitialData(){
  // use thunk pattern
  return (dispatch) => {
     return API.getUserInitialData()
          .then(({data, users, posts}) => {
            dispatch(getUserInitialData(data));
            dispatch(getInitialUsers(users));
            dispatch(getInitialPosts(posts));
          }).catch((err) => {
            //alert(JSON.stringify(err))
            dispatch(logout());
            UnsetAutorozationToken();
          })
  }
}
