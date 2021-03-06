import React from 'react';
import {Link} from 'react-router-dom';

let elements = [
  {"name":"Timelines","icon":"fas fa-meteor", "to":"/profile"},
  {"name":"Chat","icon":"fas fa-bolt", "to":"/chat"},
  {"name":"Statistics","icon":"fas fa-chart-line", "to":"/login"},
  {"name":"Events","icon":"fas fa-calendar-alt", "to":"/"},
]

const Navelement = (props) => {

  var icon_class = "nav__element-icon" + (props.selected === true ? " nav__element-icon--selected" : "");
  //console.log({"icon_class":icon_class, "selected": element.selected});
  return(
      <Link to={props.element.to} className="nav__element"
       onClick={() => {
         props.activate(props.index);
       }} >
        <div className={icon_class}>
          <i className={props.element.icon}></i>
        </div>
        <div className="nav__element-label">{props.element.name}</div>
      </Link>
  );
};


class Navigation extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentElement: 3
    }
  }

  activate = (index) => {
    this.setState({currentElement: index});
    //alert(this.state.currentElement);
  }


  render(){
    return(
      <nav className="nav nav--left">
        <div className="nav__elements">
          {
              elements.map((element, index) => {
                //alert("hey index = " + index);

                return(
                  <Navelement
                  element={element}
                  key={index}
                  index={index}
                  activate={this.activate}
                  selected={this.state.currentElement == index} />
                );
              })
          }
        </div>
      </nav>
    );
  }

}

export default Navigation;
