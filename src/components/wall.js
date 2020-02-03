import React from 'react';

const Wall = () => {
  return(

      <div className="card-container ">
          <div className="card card--wall">

            <div className="wall__img">

            </div>
            <div className="wall__profile">
              <div className="wall__profile-picture"></div>
              <div className="wall__profile-buttons">
                <div className="wall__profile-buttons-button">
                  <i class="fas fa-plus-circle"></i>
                </div>
                <div className="wall__profile-buttons-button">
                  <i class="far fa-comments"></i>
                </div>
                <div className="wall__profile-buttons-button">
                  <i class="fas fa-cogs"></i>
                </div>
              </div>
            </div>

            <div className="wall__links">
              <div className="wall__links-link">Timeline</div>
              <div className="wall__links-link">About</div>
              <div className="wall__links-link">MOUNIB</div>
              <div className="wall__links-link">Photos</div>
              <div className="wall__links-link">Videos</div>
            </div>

          </div>
      </div>
  )
};
export default Wall;
