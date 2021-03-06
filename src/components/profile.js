import React from 'react';
import Wall from './wall.js';
import Timeline from './timeline.js';
import Photos from './photos.js';
import Intro from './intro.js';
import Amis from './amis.js';

const Profile = () => {
  return(
    <div className="main">
      <div className="content">
        <div className="content__head">
          <Wall />
        </div>
        <div className="content__body">
          <div className="content__body-aside content_body-aside--left">
            <div className="card-container card-container--left">
              <Intro/>
              <Amis/>
            </div>
          </div>

          <Timeline/>

          <div className="content__body-aside content_body-aside--right">
            <div className="card-container card-container--left">
              <Photos/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
