import React from 'react';

const Navigation = () => {
  return(
    <nav className="nav nav--left">
      <div className="nav__element">
        <div className="nav__element-icon">
          <i class="fas fa-meteor"></i>
        </div>
        <div className="nav__element-label"></div>
      </div>
      <div className="nav__element">
        <div className="nav__element-icon">
          <i class="fas fa-bolt" style={{color:"#ff7730" }}></i>
        </div>
        <div className="nav__element-label"></div>
      </div>
      <div className="nav__element">
        <div className="nav__element-icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <div className="nav__element-label"></div>
      </div>
      <div className="nav__element">
        <div className="nav__element-icon">
          <i class="fas fa-calendar-alt"></i>
        </div>
        <div className="nav__element-label"></div>
      </div>
    </nav>

  )
};

export default Navigation;
