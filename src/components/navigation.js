import React from 'react';


let elements = [
  {"name":"Timelines","icon":"fas fa-meteor"},
  {"name":"Chat","icon":"fas fa-bolt", "selected":true},
  {"name":"Statistics","icon":"fas fa-chart-line"},
  {"name":"Events","icon":"fas fa-calendar-alt"},
]


const Navigation = () => {

  const navelement = (element) => {

    var icon_class = "nav__element-icon" + (element.selected == true ? " nav__element-icon--selected" : "");
    console.log({"icon_class":icon_class, "selected": element.selected});
    return(
      <div className="nav__element">
        <div className={icon_class}>
          <i className={element.icon}></i>
        </div>
        <div className="nav__element-label">{element.name}</div>
      </div>
    )
  }

  return(
    <nav className="nav nav--left">
      <div className="nav__elements">
        {elements.map(element => navelement(element))}
      </div>
    </nav>

  )
};

export default Navigation;
