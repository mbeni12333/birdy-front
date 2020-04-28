import React from "react";
import { render } from "react-dom";
import {UID} from 'react-uid';
//import { TransitionMotion, spring } from "react-motion";

class Field extends React.Component{
  constructor(props) {
      super(props);

      this.state = {
        active: (props.locked && props.active) || false,
        value: props.value || "",
        error: props.error || "",
        label: props.label || "Label",
        name: props.name || props.label || "input",
        type: props.type || "texte",
        required: props.required || false
      };
  }

  changeValue(event) {
    const value = event.target.value;
    this.setState({ value, error: "" });
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
    }
  }


  render(){
    const { active, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}`;


    return (
      <UID>
        { id =>
          <div className={fieldClassName}>
          {active &&
              value &&
              predicted &&
              predicted.includes(value) && <p className="predicted">{predicted}</p>}

            <input
              className="login-form__input"
              id={id}
              type={this.state.type}
              name={this.state.name}
              placeholder={this.state.type === "date" ? "YYYY/MM/DD" : label}
              onChange={this.changeValue.bind(this)}
              onKeyPress={this.handleKeyPress.bind(this)}
              onFocus= {() => !locked && this.setState({active: true})}
              onBlur={() => !locked && this.setState({active: false})}
              required={this.state.required}
            />
            <label htmlFor={id} className={error && "error"}>
              {error || label}
            </label>
          </div>
        }

      </UID>
    );
  }
}


export default Field;
