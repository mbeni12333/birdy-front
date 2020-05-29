import React from 'react'
import {connect} from 'react-redux';



class Users extends React.Component{

  constructor(props){
    super(props);


    this.state = {
      "value": ""
    }
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
                      <button className="user-add-btn">
                        Add +
                      </button>
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
