import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

  }

  static defaultProps = {
    toggle: false,
    title: '',
    children: null
  }

  constructor(props) {
    super(props);
    this.state = {
      /*
			Show the body part of widget
			 */
      isCollapsed: false,
    }
  }

  /**
	 * Toggle show/hide widget body
	 */
  _changeCollapse = () => this.setState({ isCollapsed: !this.state.isCollapsed })


  render() {
    const { title, toggle, icon } = this.props;
    const { isCollapsed } = this.state;
    return (
      <div className={`widget widget-container widget-${title.trim().toLowerCase().replace(' ', '-')}`}>


        {title && (
          <div className='widget-title'>

            {icon && (
              <i className={icon} />
            )}

            {title}
            {toggle && (
              <span className={`wiget-toggle-control ${isCollapsed ? 'collapsed' : ''}`}
                onClick={this._changeCollapse}
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
