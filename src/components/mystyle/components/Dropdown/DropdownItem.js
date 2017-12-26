import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  selectedvalue: PropTypes.string,
  changeSelectedValue: PropTypes.func,
  value: PropTypes.string.isRequired
};

const defaultProps = {
  tag: 'a',
  color: '',
  selectedvalue: '',
  changeSelectedValue: null,
};

const DropdownItem = (props) => {
  const {
    className,
    cssModule,
    color,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    color,
    props.value === props.selectedvalue ? 'active' : '',
    'dropdown-item'
  ), cssModule);
  const _change = (event) => {
    event.stopPropagation();
    props.changeSelectedValue(props.value);
  }
  return (
    <Tag {...attributes}
      className={classes}
      onClick={_change}
    />
  );
};

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
