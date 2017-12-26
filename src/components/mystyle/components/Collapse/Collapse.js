import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

import './Collapse.scss'

class Collapse extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    title: PropTypes.string,
    defaultOpen: PropTypes.bool,
  }
  static defaultProps = {
    className: '',
    title: 'Collapse',
    defaultOpen: true
  }
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen
    }
  }
  _toggle = e => {
    e.preventDefault();
    this.setState({isOpen: !this.state.isOpen})
  } 
  render() {
    const {
      title,
      className,
      cssModule,
      ...attributes
    } = this.props;

    const {isOpen} = this.state;

    const classes = mapToCssModules(classNames(
      className,
      'collapse-component',
    ), cssModule);
    return (
      <div className={classes} {...attributes}>
        <div className="collase-title" onClick={this._toggle} tabIndex="0" role="button">
          <div className="d-flex justify-content-between">
            <span>
              {title}
            </span>
            <span>
              <i className={isOpen ? 'ion-minus-round' : 'ion-plus-round'} />
            </span>
          </div>
        </div>
        <div style={{display: isOpen ? 'block' : 'none'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Collapse;
