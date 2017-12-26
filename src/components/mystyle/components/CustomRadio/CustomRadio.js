import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

import './CustomRadio.css'

const propTypes = {
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  label: PropTypes.string.isRequired,
  helpTxt: PropTypes.string,
};

const defaultProps = {
  className: '',
  helpTxt: ''
};

class CustomRadio extends React.Component {
  render() {
    const {
      innerRef,
      label,
      helpTxt,
      className,
      cssModule,
      ...attributes
    } = this.props;
    const classes = mapToCssModules(classNames(
      className,
      'custom-control',
      'custom-radio ',
    ), cssModule);

    return (
      <label className={classes} htmlFor={innerRef}>
        <input {...attributes}
          ref={innerRef}
          type="radio"
          className="custom-control-input"
        />
        <span className="custom-control-indicator" />
        <span className="custom-control-description">
          {label}
          {helpTxt &&
          <span className="form-text text-muted">
            {helpTxt}
          </span>
          }
        </span>
      </label>
    );
  }
}

CustomRadio.propTypes = propTypes;
CustomRadio.defaultProps = defaultProps;

export default CustomRadio;
