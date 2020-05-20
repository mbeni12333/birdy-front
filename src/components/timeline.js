import React from 'react';
import Post from './post.js';

import image from '../images/graphql.png';
import tests from '../images/test.jpeg';


let posts = [
  {
    "like": "1k",
    "share": "2k",
    "comment":"3",
    "user":{
      "username":"Mounib",
      "profile_pic":"/images/gintoki.jpg",
      "link":"@mounibben"
    },
    "photos":["/images/gentle.jpg"],
    "content": "Yes !!!!!!!!!!! !!!!!!!!!! finally the images are disposed like they should be ... horribly",
    "timestamp": "14h"
  },
  {
    "user":{
      "username":"Kelb",
      "profile_pic":"/images/dog.jpg",
      "link":"@kelb"
    },
    "photos":["/images/gintoki.jpg", "/images/graphql.png"],
    "content": "i'm a new message that is being written right now",
    "timestamp": "13h"
  },
  {
    "user":{
      "username":"Mounib",
      "profile_pic":"/images/gintoki.jpg",
      "link":"@mounibben"
    },
    "photos":["/images/test.jpeg", "/images/test.jpeg","/images/test.jpeg", "/images/graphql.png"],
    "content": "Wow that looks promising, i better start doing something else, but before that let's just change this little thingy",
    "timestamp": "14h"
  },
  {
    "user":{
      "username":"Bghel",
      "profile_pic":"/images/cheese.webp",
      "link":"@bghel"
    },
    "photos":["/images/noise.webp"],
    "content": "i'm a new message that is being written right now",
    "timestamp": "14h"
  }
];

const Timeline = () => {
    return(

        <div className="card-container card-container--timeline">
          {posts.map((post, index) => {
            return <Post
                    user={post.user}
                    photos={post.photos}
                    content={post.content}
                    timestamp={post.timestamp}
                    like={post.like}
                    comment={post.comment}
                    share={post.share}
                    key={index}/>
          })}
        </div>
    )
}

export default Timeline;
