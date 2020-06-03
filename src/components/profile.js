import React from 'react';
import Wall from './wall.js';
import Timeline from './timeline.js';
import Photos from './photos.js';
import Intro from './intro.js';
import Amis from './amis.js';
import AddPost from './addpost.js'
import {connect} from 'react-redux'


class Profile extends React.Component{


  render(){

    const user_id = this.props.match.params.id;
    const user = this.props.friends[user_id];

    if(!user)
      return(<div className="main"></div>)
    return(
      <div className="main">
        <div className="content">
          <div className="content__head">
            <Wall user={user}/>
          </div>
          <div className="content__body">
            <div className="content__body-aside content_body-aside--left">
                <Intro/>
                <Amis friends={user.friends || []}/>
                <Photos/>
            </div>
            <div className="content__body-main">
              <AddPost />
              <Timeline profile={user.id}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps({user, friends}){
  return{
    user,
    friends
  }
}
export default connect(mapStateToProps)(Profile);
