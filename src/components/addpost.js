import React from 'react'


class AddPost extends React.Component{


  render(){
    return(
      <div className="card-container">
        <div className="card">
          <div className="addpost__input">
            <div className="user-icon">
              <img src="/images/gintoki.jpg"/>
            </div>
            <button className="input__btn">
              Que voulez-vous dire ?
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddPost
