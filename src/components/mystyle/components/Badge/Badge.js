import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

import './Badge.css'

class Badge extends Component {
  static propTypes = {
    onItemClick: PropTypes.func,

    /*
    Color: danger, primary, info, danger, darke
    */
    color: PropTypes.string,

    pill: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    children: PropTypes.any
  }

  static defaultProps = {
    color: 'secondary',
    pill: false,
    id: null,
    children: null,
    onItemClick: null,
    className: ''
  }

  _onClick = (event) => {
    if (this.props.onItemClick !== null && this.props.onItemClick !== undefined) {
      this.props.onItemClick(event, this.props.id)
    }
  }
  _handleKeyPress = event => {}

  render() {
    const {
      color,
      pill,
      className,
      cssModule,
      ...attributes
    } = this.props;
    const classes = mapToCssModules(classNames(
      className,
      'badge',
      pill ? 'badge-pill' : false,
      color ? `badge-${color}` : false,
    ), cssModule);

    return (
      <div className={classes}
        onClick={this._onClick}
        {...attributes}
        tabIndex={0}
        role="button"
        onKeyPress={this._handleKeyPress}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Badge
