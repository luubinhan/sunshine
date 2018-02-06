import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
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
  componentWillMount() {
    const id = _.uniqueId('labelFor');
    this.id = id;
  }
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
      'custom-radio',
    ), cssModule);

    return (
      <div className={classes} htmlFor={innerRef}>
        <input {...attributes}
          id={this.id}
          ref={innerRef}
          type="radio"
          className="custom-control-input"
        />
        <label className="custom-control-label" htmlFor={this.id}>
          {label}
          {helpTxt &&
          <span className="form-text text-muted">
            {helpTxt}
          </span>
          }
        </label>
      </div>
    );
  }
}

CustomRadio.propTypes = propTypes;
CustomRadio.defaultProps = defaultProps;

export default CustomRadio;
