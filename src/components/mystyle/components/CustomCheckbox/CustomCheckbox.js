import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import { mapToCssModules } from '../../utils';

import './CustomCheckbox.css'

const propTypes = {
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  desc: PropTypes.string,
  label: PropTypes.string.isRequired,
};

const defaultProps = {
  desc: '',
  className: '',
};

class CustomCheckbox extends React.Component {
  componentWillMount() {
    this.id = _.uniqueId('checkbox_id_');
  }
  render() {
    const {
      desc,
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
      <div className={classes} >
        <input {...attributes}
          id={this.id}
          type="checkbox"
          className="custom-control-input"
        />
        <label className="custom-control-label" htmlFor={this.id}>
          {label}
          {desc &&
          <span className="form-text text-muted">
            {desc}
          </span>
          }
        </label>
      </div>
    );
  }
}

CustomCheckbox.propTypes = propTypes;
CustomCheckbox.defaultProps = defaultProps;

export default CustomCheckbox;
