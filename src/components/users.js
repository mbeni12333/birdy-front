import React from 'react'
import {connect} from 'react-redux';
import {addFriend, ADD_FRIEND, removeFriend, REMOVE_FRIEND, handleAddFriend, handleRemoveFriend} from "../actions/friends";

class Users extends React.Component{

  constructor(props){
    super(props);


    this.state = {
      "value": ""
    }
  }


  addFriend = (e, user) => {
    e.stopPropagation();
    e.preventDefault();

    //alert("Try adding " + user.username);

    this.props.dispatch(handleAddFriend(user));
  }

  removeFriend = (e, user) => {
    e.stopPropagation();
    e.preventDefault();

    //alert("Try adding " + user.username);

    this.props.dispatch(handleRemoveFriend(user));
  }



  render(){

    const users = this.props.friends;
    const users_sorted = Object.keys(users).sort((a, b)=>{

      if(users[a].avatar === users[b].avatar)
        return 0;

      return users[a].avatar < users[b].avatar ? -1 : 1;
    })

    //console.log(users_sorted);



    return(
      <div className="users">

        <div className="users-grid">

          {
            users_sorted.map((key, index) => {

              let user = users[key];
              const isFriend = this.props.user.friends.filter(u => u.id===user.id).length > 0;
              let button;

              if(isFriend === true){
                button = <button className="user-add-btn user-add-btn--remove" onClick={(e) => this.removeFriend(e, user)}>Remove -</button>
              }else{
                button = <button className="user-add-btn " onClick={(e) => this.addFriend(e, user)}>Add +</button>
              }


              return(
                <div key={index} className="card-container card-container--users-grid">
                  <div className="card card--users-grid">
                    <div className="user-avatar">
                      <img src={user.avatar} />
                    </div>
                    <div className="user-info">
                      <div className="user-info-name">{user.username}</div>
                      <div className="user-info-email">{user.id}</div>
                      <div className="user-info-bday">{user.birthday}</div>
                    </div>
                    <div className="user-add">
                      {button}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}



function mapStateToProps({user, friends}){
  return{
    user,
    friends
  }
}

export default connect(mapStateToProps)(Users);
