import React from 'react';
import Post from './post.js';

import image from '../images/graphql.png';
import tests from '../images/test.jpeg';


const Timeline = () => {
    return(

        <div className="card-container card-container--timeline">
          <Post  />
          <Post  />
        </div>
    )
}

export default Timeline;
