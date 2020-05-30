import React from 'react';

const Amis = (props) => {


    const {friends} = props

    return(

      <div className="card-container card-container--amis">
        <div className="card card--amis">
          <div className="card__title">
            <div className="card__title-icon card__title-icon--pink"><i className="fas fa-users"></i></div>
            <h3>Amis</h3>
          </div>
          <div className="pelicule">
            {
              friends.slice(0, 9).map(user => {
                return(
                  <div className="pelicule-amis">
                    <img src={user.avatar} />
                    <div className="pelicule-amis-info">{user.username}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
}

export default Amis;
