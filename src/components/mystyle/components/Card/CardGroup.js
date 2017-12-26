import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
};
const defaultProps = {
  className: '',
};
const CardGroup = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-group',
  ), cssModule);

  return (
    <div {...attributes}
      className={classes}
    >
      {props.children}
    </div>
  );
}

CardGroup.propTypes = propTypes;
CardGroup.defaultProps = defaultProps;

export default CardGroup
