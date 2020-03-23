import React from 'react';

const Photos = () => {
    return(

      <div className="card-container card-container--photos">
        <div className="card card--photos">
          <div className="card__title">
            <div className="card__title-icon card__title-icon--green"><i class="fas fa-image"></i></div>
            <h3>Photos</h3>
          </div>
          <div className="pelicule">
            <div className="pelicule-photo"></div>
            <div className="pelicule-photo"></div>
            <div className="pelicule-photo"></div>
            <div className="pelicule-photo"></div>
            <div className="pelicule-photo"></div>
            <div className="pelicule-photo"></div>
            <div className="pelicule-photo"></div>
          </div>
        </div>
      </div>
    )
}

export default Photos;
