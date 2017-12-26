import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  color: PropTypes.string,
  outline: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};
const defaultProps = {
  tag: 'div',
  outline: false,
  color: 'light'
};

const WidgetHeader = (props) => {
  const {
    className,
    cssModule,
    color,
    outline,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'widget-title',
    color ? `${outline ? 'border' : 'bg'}-${color}` : false
  ), cssModule);
  return (
    <Tag {...attributes}
      className={classes}
    />
  );
}
WidgetHeader.propTypes = propTypes;
WidgetHeader.defaultProps = defaultProps;

export default WidgetHeader;
