import React from 'react';

import Timeline from './timeline.js';
import AddPost from './addpost.js'



const Home = () => {
  return(
    <div className="main">
      <div className="content" style={{"max-width": "800px"}}>
        <div className="content__body">
          <div className="content__body-main">
            <AddPost />
            <Timeline/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
