import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

import './CustomCheckbox.css'

const propTypes = {
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  helpTxt: PropTypes.string,
  label: PropTypes.string.isRequired,
};

const defaultProps = {
  helpTxt: '',
  className: ''
};

class CustomCheckbox extends React.Component {
  render() {
    const {
      innerRef,
      helpTxt,
      label,
      className,
      cssModule,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(classNames(
      className,
      'custom-control',
      'custom-checkbox',
    ), cssModule);

    return (
      <label className={classes} htmlFor={innerRef}>
        <input {...attributes}
          type="checkbox"
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

CustomCheckbox.propTypes = propTypes;
CustomCheckbox.defaultProps = defaultProps;

export default CustomCheckbox;
