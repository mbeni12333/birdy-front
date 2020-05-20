import React from 'react';
import image from '../images/graphql.png';





const post_element = (post) => {

  console.log(post);
  var username = post.user.username ? post.user.username : "User";

  return (
    <div className="post">
      <div className="post__aside">
      <div className="post__aside-element post__aside-element--icon">
        <i className="fas fa-retweet"></i>
      </div>
        <div className="post__aside-element post__aside-element--picture">
          <img src={post.user.profile_pic} className="ost__aside-element-picture" />
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
          <div className="post__content-person-name"><b>{post.user.username}</b></div>
          <div className="post__content-person-link"><i>{post.user.link}</i></div>
          <div className="post__content-person-time"><i>{post.timestamp}</i></div>

        </div>
        <div className="post__content-body">
          <div className="post__content-body__text">{post.content}</div>
          <div className="post__content-body__photo">
            {post.photos.map((photo, index) => {
              return <img key={index} src={photo} />
            })}
          </div>
        </div>

      </div>
    </div>
  )
}


class Post extends React.Component{

  render(){

    var nb_like = this.props.like ? this.props.like : 0;
    var nb_comment = this.props.comment ? this.props.comment: 0;
    var nb_share = this.props.share ? this.props.share : 0;

    return(
      <div className="card-container card-container--post">
        <div className="card card--post">
          <div className="post-container">
              {post_element(this.props)}
          </div>
          <div className="post__content-footer">
            <div className="post__footer-button">
              <div className="post__footer-button-icon post__footer-button-icon--heart">
                <i className="fas fa-heart"></i>
              </div>
              <div className="post__footer-button-label">
                {nb_like}
              </div>
            </div>
            <div className="post__footer-button">
              <div className="post__footer-button-icon post__footer-button-icon--comment">
                <i className="far fa-comment-alt"></i>
              </div>
              <div className="post__footer-button-label">
                {nb_comment}
              </div>
            </div>
            <div className="post__footer-button">
              <div className="post__footer-button-icon post__footer-button-icon--share">
                <i className="fas fa-retweet"></i>
              </div>
              <div className="post__footer-button-label">
                {nb_share}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
/*            <!-- <div className="post__reply">
              <div className="post__reply-user">

              </div>
              <div className="post__reply-input">
                <input name="name" placeholder="comment ..."/>
                <button type="button" name="button">Send</button>
              </div>
            </div>
            -->*/
export default Post;
