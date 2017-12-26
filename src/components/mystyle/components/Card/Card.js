import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

import './Card.css'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  outline: PropTypes.bool,
  // card title # card header, like google card design
  title: PropTypes.string,
  subTitle: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};
const defaultProps = {
  tag: 'div',
  inverse: false,
  color: '',
  className: '',
  outline: false,
  title: '',
  subTitle: ''
};

const Card = (props) => {
  const {
    className,
    cssModule,
    color,
    inverse,
    outline,
    title,
    subTitle,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card',
    inverse ? 'text-white' : false,
    outline ? 'border' : 'no-border',
    color ? `${'bg'}-${color}` : false
  ), cssModule);

  return (
    <Tag {...attributes}
      className={classes}
    >
      {title ?
        <div className="card-with-title">
          <div className="card-title">{title}</div>
          {subTitle &&
            <div className="card-subtitle mb-2 text-muted">{subTitle}</div>
          }
          {props.children}
        </div>
        :
        props.children
      }
    </Tag>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
