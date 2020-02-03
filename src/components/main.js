import React from 'react';
import Wall from './wall.js';
import Timeline from './timeline.js';
import Photos from './photos.js';
import Intro from './intro.js';

const Main = () => {
  return(
    <main className="main">
      <div className="content">
        <div className="content__head">
          <Wall />
        </div>
        <div className="content__body">
          <Intro/>
          <Timeline/>
          <Photos/>
        </div>
      </div>
    </main>
  )
}

export default Main;
