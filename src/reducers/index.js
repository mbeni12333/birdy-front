import {combineReducers} from 'redux';


import {user} from '../reducers/user';
import {friends} from '../reducers/friends';
import {messages} from '../reducers/messages';
import {posts} from '../reducers/posts';

export default combineReducers({
  user,
  friends,
  posts,
  messages
});
