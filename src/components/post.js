import React from 'react';
import image from '../images/graphql.png';
import Fullsc from '../components/fullsc.js';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {handleRemovePost} from "../actions/posts";
import {Twemoji} from 'react-emoji-render';


class PostElement extends React.Component {

  //console.log(post);
  //var username = post.user.username ? post.user.username : "User";
  constructor(props){
    super(props)

    this.state = {
      active: false,
      lastPhoto: ""
    }
  }




  toggleActive = (photo) => {
    //alert(photo);

    this.setState({
      active: !this.state.active,
      lastPhoto: photo
    })
  }

  render(){

    const post = this.props
    var username = post.user.username ? post.user.username : "User";



    if(this.state.active === true){
      return(
        <div className="fullsc-conatiner" id="fullsc-conatiner">
          <button className="btn-circle btn-circle--large fullsc-close" onClick={(e) => this.toggleActive("")}>
            <i className="fas fa-times"></i>
          </button>

          <img src={this.state.lastPhoto} style={{
            "position": "absolute",
            "objectFit": "cover",
            "width": "200vw",
            "top":"0",
            "left":"0",
            "filter":"blur(10px) brightness(0.4)",
            "z-index": "-1"
          }}/>

          <img src={this.state.lastPhoto} style={{
            "flex": "1",
            "width": "auto",
            "objectFit": "contain",
            "max-height": "80%"
          }}/>

        </div>
      )
    }


    /*Get the photos from post, And try from the content too*/
    var matches = post.content.match(/\bhttps?:\/\/\S+/gi);
    matches = matches !== null ? matches : []

    var content_without_links = post.content.replace(/\bhttps?:\/\/\S+/gi, "")

    content_without_links = <Twemoji text={content_without_links}/>

    const photos = ((post.photos.length > 0) ||  (matches.length > 0)) ? (
      <div className="post__content-body__photo">
        {
            post.photos.map((photo, index) => {
              return(
                <img key={index} src={photo} onClick={() => this.toggleActive(photo)} />
              )
            })
        }

        {
            matches.map((photo, index) => {
              return(
                <img key={index} src={photo} onClick={() => this.toggleActive(photo)} />
              )
            })
        }
    </div>
  ) : ""

    const remove = post.owned === true ? <div className="post__content-header-remove" onClick={(e) => this.props.onRemove(e)}>
                                            <i className="fas fa-times-circle"></i>
                                          </div> : ""

    var date = 0

    if(post.id){
      const timestamp = post.id.substring(0,8)
      date = Math.abs((new Date()) - (new Date( parseInt( timestamp, 16 ) * 1000 )))
    }
    //console.log("date = " + date)
    var time = "now";

    if(date/1000/3600/24 >= 1){
      time = Math.floor(date/1000/3600/24) + "d"
    }else if (date/1000/3600 >= 1){
      time = Math.floor(date/1000/3600) + "h"
    }else if (date/1000/60 >= 1){
      time = Math.floor(date/1000/60) + "m"
    }

    return (
      <div className="post">
        <div className="post__aside">
          <div className="post__aside-element post__aside-element--icon"><i className="fas fa-retweet"></i></div>
          <div className="post__aside-element post__aside-element--picture">
            <img src={post.user.avatar} className="ost__aside-element-picture" />
          </div>
          <div className="post__aside-element post__aside-element--bar">
            <div className="post__aside-element-bar"></div>
          </div>
        </div>
        <div className="post__content">
          <div className="post__content-header">
            <p>Mounib shared</p>
            {remove}
          </div>
          <div className="post__content-person">
            <div className="post__content-person-name"><b style={{"fontSize":"2rem", "textTransform":"capitalize"}}>{post.user.username}</b></div>
            <div className="post__content-person-link"><i>@{post.user.username}</i></div>
            <div className="post__content-person-time"><i>{time}</i></div>

          </div>
          <div className="post__content-body">
            <div className="post__content-body__text">{content_without_links}</div>
            {photos}
          </div>

        </div>
      </div>
    )
  }

}


class Post extends React.Component{


  removePost = (e) => {
    //alert("Trying to remove a post " + this.props.id);

    this.props.dispatch(handleRemovePost(this.props.id))
  }



  render(){

    var nb_like = this.props.like ? this.props.like : 0;
    var nb_comment = this.props.comment ? this.props.comment: 0;
    var nb_share = this.props.share ? this.props.share : 0;

    return(
      <div className="card-container card-container--post">
        <div className="card card--post">
          <div className="post-container">
              <PostElement {...this.props} onRemove={(e) => this.removePost(e)}/>
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
export default connect()(Post);
