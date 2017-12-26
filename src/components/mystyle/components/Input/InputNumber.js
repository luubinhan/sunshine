import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './InputNumber.css'

class InputNumber extends Component {
  static propTypes = {

    /*
     css class
      */
    cssClass: PropTypes.string,

    /*
     Min value
     */
    min: PropTypes.number,

    /*
     max value
     */
    max: PropTypes.number,

    /*
     step value
     */
    step: PropTypes.number,

    /*
     input value
     */
    defaultValue: PropTypes.number,

    /*
     function call after value has change
     */
    onChangeValue: PropTypes.func,
  }

  static defaultProps = {
    cssClass: '-',
    defaultValue: 1,
    min: 1,
    max: 10,
    step: 1,
  }

  constructor(props) {
    super(props);
    this.state = {
      stateValue: props.defaultValue,
    }
  }

  _minus = event => {
    //update Value
    const newValue = this.state.stateValue - this.props.step;

    if (newValue >= this.props.min) {
      this.setState({ stateValue: newValue });
      this.props.onChangeValue(event, newValue);
    }
  }

  _plus = event => {
    //update Value
    const newValue = this.state.stateValue + this.props.step;
    if (newValue <= this.props.max) {
      this.setState({ stateValue: newValue });
      this.props.onChangeValue(event, newValue);
    }
  }

  render() {
    const {
      cssClass,
      min,
      max,
    } = this.props;

    return (
      <div className={`input-number-block ${cssClass}`}>
        <div className="input-number-decrement"
          onClick={this._minus}
          role="button"
          tabIndex="0"
        >–
        </div>
        <input className="input-number"
          type="number"
          value={this.state.stateValue}
          min={min}
          max={max}
        />
        <div className="input-number-increment"
          onClick={this._plus}
          role="button"
          tabIndex="0"
        >+
        </div>
      </div>
    );
  }
}
export default InputNumber
