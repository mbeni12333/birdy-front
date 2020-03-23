import React from 'react';

let people = [
  {"pseudo": "Mounib",
   "photo" : "/images/gintoki.jpg",
   "status": "online"},

   {"pseudo": "Bghel",
    "photo" : "/images/cheese.webp",
    "status": "online"},

    {"pseudo": "kelb",
     "photo" : "/images/dog.jpg",
     "status": "offline"},
];

const Friends = () => {

  const navelement = (person) => {
    return(
      <div className="nav__element">
        <div className="nav__element-icon">
          <div className="nav__element-user">
            <img src={person.photo}/>
          </div>
        </div>
        <div className="nav__element-label">
          <span className="nav__element-label-text">{person.pseudo}</span>
          <div className="nav__element-label-status nav__element-label-status--online"></div>
        </div>
      </div>
    );
  }

  return(
    <aside className="nav nav--right">
      <div className="nav__elements">
        {people.map((person) => navelement(person))}
      </div>
      <div className="nav__element nav__button">
        <div className="nav__button-icon">
          <i className="fab fa-twitch"></i>
        </div>
        <div className="nav__element-label nav__element-label--white">
          <span className="nav__element-label-text">Messages</span>
        </div>
      </div>
    </aside>
  )
};
/*
<div className="nav__element">
  <div className="nav__element-icon">
    <div className="nav__element-user">

    </div>
  </div>
  <div className="nav__element-label">
    <span className="nav__element-label-text">
      Blablabla
    </span>
    <div className="nav__element-label-status nav__element-label-status--online"></div>
  </div>
</div>
<div className="nav__element">
  <div className="nav__element-icon">
    <div className="nav__element-user">

    </div>
  </div>
  <div className="nav__element-label">
    <span className="nav__element-label-text">
      stuff
    </span>
    <div className="nav__element-label-status nav__element-label-status--offline"></div>
  </div>
</div>
<div className="nav__element">
  <div className="nav__element-icon">
    <div className="nav__element-user">

    </div>
  </div>
  <div className="nav__element-label">
    <span className="nav__element-label-text">
      Test
    </span>
    <div className="nav__element-label-status nav__element-label-status--online"></div>
  </div>
</div>
<div className="nav__element">
  <div className="nav__element-icon">
    <div className="nav__element-user">

    </div>
  </div>
  <div className="nav__element-label">
    <span className="nav__element-label-text">
      Mounib
    </span>
    <div className="nav__element-label-status nav__element-label-status--online"></div>
  </div>
</div>
<div className="nav__element">
  <div className="nav__element-icon">
    <div className="nav__element-user">

    </div>
  </div>
  <div className="nav__element-label">
    <span className="nav__element-label-text">
      LitteralyAnything
    </span>
    <div className="nav__element-label-status nav__element-label-status--offline"></div>
  </div>
</div>


*/
export default Friends;
