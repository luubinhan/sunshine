import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

import './Widget.css';

export default class Widget extends Component {
  static propTypes = {

    /*
    Show a control to toggle the widget body
    */
    toggle: PropTypes.bool,

    /*
    Widget's title
    */
    title: PropTypes.string,

    /*
    Widget's icon
    */
    icon: PropTypes.string,

    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,

  }

  static defaultProps = {
    toggle: false,
    title: '',
    children: null,
    icon: '',
    className: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
    }
  }

  /**
   * Toggle show/hide widget body
   */
  _changeCollapse = () => this.setState({ isCollapsed: !this.state.isCollapsed })


  render() {
    const { title, toggle, icon, className, cssModule } = this.props;
    const { isCollapsed } = this.state;
    const classes = mapToCssModules(classNames(
      className,
      'widget',
      'widget-container'
    ), cssModule);
    return (
      <div className={classes}>


        {title && (
          <div className='widget-title'>

            {icon && (
              <i className={icon} />
            )}

            {title}
            {toggle && (
              <span className={`wiget-toggle-control ${isCollapsed ? 'collapsed' : ''}`}
                onClick={this._changeCollapse}
                tabIndex="0"
                role="button"
              >
                <i className="ion-chevron-down" />
              </span>
            )}
          </div>
        )}

        {!isCollapsed && (
          <div className='widget-body'>
            {this.props.children}
          </div>
        )}

      </div>
    );
  }
}
