import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

const propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  primary: PropTypes.bool,
  icon: PropTypes.string,
};

const defaultProps = {
  color: '',
  tag: 'button',
  primary: false,
  icon: '',
  className: ''
};

class Button extends React.Component {
  onClick = e => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      active,
      block,
      className,
      cssModule,
      color,
      outline,
      size,
      primary,
      innerRef,
      icon,
      ...attributes
    } = this.props;

    let {
      tag: Tag,
    } = this.props;

    const classes = mapToCssModules(classNames(
      className,
      'btn',
      `btn${outline ? '-outline' : ''}-${color}`,
      size ? `btn-${size}` : false,
      block ? 'btn-block' : false,
      primary ? 'btn-primary' : false,
      { active, disabled: this.props.disabled }
    ), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag
        type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
        {...attributes}
        className={classes}
        ref={innerRef}
        onClick={this.onClick}
      >
        {icon &&
          <i className={`${icon} pr-1`} />
        }
        {this.props.children}
      </Tag>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
