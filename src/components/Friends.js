import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

/*let people = [
  {"pseudo": "Mounib",
   "photo" : "/images/gintoki.jpg",
   "status": "online"},

   {"pseudo": "Bghel",
    "photo" : "/images/cheese.webp",
    "status": "online"},

    {"pseudo": "kelb",
     "photo" : "/images/dog.jpg",
     "status": "offline"},
];*/



const navelement = (person, index) => {
  return(
    <div className="nav__element" key={index}>
      <div className="nav__element-icon">
        <div className="nav__element-user">
          <img src={person.avatar}/>
        </div>
        <div className="nav__element-label-status nav__element-label-status--online"></div>
      </div>
      <div className="nav__element-label">
        <span className="nav__element-label-text"><b style={{"fontSize":"2rem", "textTransform":"capitalize"}}>{person.username}</b></span>
      </div>
    </div>
  );
};

class Friends extends React.Component{



  render(){

    let people = this.props.user.friends || [];

    return(
      <aside className="nav nav--right">
        <div className="nav__content">
          <div className="nav__desc" style={{"display":"none"}}>
            <p>Contact</p>
            <span>search</span>
          </div>
          <div className="nav__elements">
            {
                people.map((person, index) => <Link to={"/profile/"+person.id}>{navelement(person, index)}</Link>)
            }
          </div>
          <div className="nav__element nav__button">
            <div className="nav__button-icon">
              <i className="fab fa-twitch"></i>
            </div>
            <div className="nav__element-label nav__element-label--white">
              <span className="nav__element-label-text">Messages</span>
            </div>
          </div>
        </div>
      </aside>
    )
  }
};


function mapStateToProps({user, friends}){
  return{
    user,
    friends
  }
}

export default connect(mapStateToProps)(Friends);
