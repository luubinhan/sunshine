import React from 'react';
import PropTypes from 'prop-types';

import {isEmpty} from '../../utils'
import {runValidate, ruleRunner} from '../../utils/validations'
import {checkRequired, checkEmail} from '../../utils/rules'

import './Input.css'

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,

  /*
  sizing input, accepted value 'lg' | 'sm'
   */
  size: PropTypes.string,

  // is field valid
  isValid: PropTypes.bool,

  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  addon: PropTypes.bool,
  cssClass: PropTypes.string,

  // label text
  label: PropTypes.string,

  // validations
  required: PropTypes.bool,

  // error message
  message: PropTypes.string,

  // callback after validate
  aftervalidate: PropTypes.func,
  helpTxt: PropTypes.string,
};

const defaultProps = {
  type: 'text',
  label: '',
  children: null,
  message: 'Please provide a value',
  isValid: true,
  required: false,
  aftervalidate: null,
  helpTxt: ''
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.validations = [];
    this.state = {
      isError: !props.isValid,
      messageToDisplay: {}
    }

    if (props.required) {
      this.validations.push(ruleRunner(props.label, checkRequired));
    }
    if (props.type === 'email') {
      this.validations.push(ruleRunner(props.label, checkEmail));
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({value: nextProps.value})
    }
    //(nextProps.required) && this.
  }
  _handleChange = event => {
    this.setState({value: event.target.value})
  }
  _handleKeyUp = event => {
    // run validate
    if (!isEmpty(this.validations)) {
      const resultValidate = runValidate(this.state.value, this.validations)
      this.setState({
        messageToDisplay: resultValidate,
        isError: !(Object.keys(resultValidate).length === 0)
      })

      // callback to parent component
      if (typeof this.props.aftervalidate === 'function') {
        this.props.aftervalidate({messageToDisplay: resultValidate, isError: !(Object.keys(resultValidate).length === 0) })
      }
    }
  }
  render() {
    const {
      type,
      size,
      addon,
      innerRef,
      label,
      required,
      ...attributes
    } = this.props;

    const {
      helpTxt,
      isError,
      messageToDisplay
    } = this.state;

    const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;

    const fileInput = type === 'file';
    const textareaInput = type === 'textarea';
    const selectInput = type === 'select';
    const Tag = selectInput || textareaInput ? type : 'input';
    const classSize = typeof size === 'string' ? `form-control-${size}` : '';
    let classValid = '';
    switch (isError) {
    case true:
      classValid = 'is-invalid';
      break;
    case false:
      classValid = '';
      break;
    default:
      classValid = '';
      break;
    }

    const cssClass = typeof this.props.cssClass === 'string' ? cssClass : '';

    let formControlClass = `form-control ${cssClass} ${classSize} ${classValid}`;

    if (fileInput) {
      formControlClass = `${formControlClass}-file`;
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'custom-control-input';
      }
    }

    if (Tag === 'input') {
      attributes.type = type;
    }

    return (
      !isEmpty(label) ?
        <div className="form-group">
          {!isEmpty(label) &&
            <label htmlFor={innerRef}>
              {this.props.label}
              {required &&
                <span>*</span>
              }
            </label>
          }
          <Tag {...attributes}
            ref={innerRef}
            className={formControlClass}
            onChange={this._handleChange}
            onKeyUp={this._handleKeyUp}
          />
          {helpTxt &&
            <small className="form-text text-muted">
              {helpTxt}
            </small>
          }

          {isError &&
          <div className="invalid-feedback">
            {messageToDisplay.message}
          </div>
          }
        </div>
        :
        <div className="input-wrapper">
          <Tag {...attributes}
            ref={innerRef}
            className={formControlClass}
            onChange={this._handleChange}
            onKeyUp={this._handleKeyUp}
          />
          {helpTxt &&
            <small className="form-text text-muted">
              {helpTxt}
            </small>
          }
          {isError &&
          <div className="invalid-feedback">
            {messageToDisplay.message}
          </div>
          }
        </div>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
