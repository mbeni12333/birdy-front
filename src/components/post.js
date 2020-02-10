import React from 'react';


import image from '../images/graphql.png';

const Post = () => {
  return(
    <div className="post-container">
      <div className="card post">
        <div className="post__aside">
        <div className="post__aside-element post__aside-element--icon">
          <i className="fas fa-retweet"></i>
        </div>
          <div className="post__aside-element post__aside-element--picture">
            <div className="post__aside-element-picture"></div>
          </div>
          <div className="post__aside-element post__aside-element--bar">
            <div className="post__aside-element-bar"></div>
          </div>
        </div>
        <div className="post__content">
          <div className="post__content-header">
            <p>Mounib shared</p>
          </div>
          <div className="post__content-person">
            <div className="post__content-person-name"><b>Mounib</b></div>
            <div className="post__content-person-link"><i>@mounib</i></div>
            <div className="post__content-person-time"><i>. 14h</i></div>

          </div>
          <div className="post__content-body">
            <div className="post__content-body__text">lorem  epsiom dolor lorem epsiom dolor lorem epsiom dolorlorem epsiom dolor
            lorem epsiom dolorlorem epsiom dolor lorem epsiom dolor lorem epsiom dolor lorem epsiom dolor
            lorem epsiom dolorlorem epsiom dolor lorem epsiom dolorlorem epsiom dolorloremlorem epsiom dolor</div>
            <div className="post__content-body__photo">
              <img src={image} />
            </div>
          </div>
          <div className="post__content-footer">
            <div className="post__footer-button"><i className="fas fa-heart"></i> Like</div>
            <div className="post__footer-button"><i className="far fa-comment-alt"></i> Comment</div>
            <div className="post__footer-button"><i className="fas fa-retweet"></i> Share</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Post;
