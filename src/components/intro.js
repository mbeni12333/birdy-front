import React from 'react';

const Intro = () => {
    return(

      <div className="card-container card-container--intro">
        <div className="card card--intro">
          <div className="card__title">
            <div className="card__title-icon card__title-icon--blue"><i className="fas fa-globe-europe"></i></div>
            <h3>About me</h3>
          </div>
          <div className="bio">
            <div className="bio__element bio__element--paragraph">
              <div className="bio__element-icon"><i className="fas fa-info"></i></div>
              <div className="bio__element-text">Cheesecake ni naritai</div>
            </div>
            <div className="bio__element bio__element--job">
              <div className="bio__element-icon"><i className="fas fa-suitcase"></i></div>
                <div className="bio__element-text">Some job</div>
            </div>
            <div className="bio__element bio__element--birthday">
              <div className="bio__element-icon"> <i className="fas fa-calendar-alt"></i></div>
                <div className="bio__element-text">Some birthday</div>
            </div>
            <div className="bio__element bio__element--location">
              <div className="bio__element-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="bio__element-text">Some place</div>
            </div>

          </div>
        </div>
      </div>
    )
}

export default Intro;
