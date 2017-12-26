import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './UserMenu.css'

export default class UserMenu extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    userName: PropTypes.string.isRequired,
    logoutHandle: PropTypes.func,
    loginHandle: PropTypes.func,
    items: PropTypes.array,
    avatar: PropTypes.string,
  }

  static defaultProps = {
    isAuthenticated: false,
    avatar: '',
    logoutHandle: null,
    loginHandle: null,
    items: []
  }

  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    }
  }

  callLogout = (event) => {
    const {logoutHandle} = this.props;
    if (logoutHandle !== undefined && logoutHandle !== null) {
      logoutHandle();
    }
  }

  callLogin = (event) => {
    const {loginHandle} = this.props;
    if (loginHandle !== undefined && loginHandle !== null) {
      loginHandle();
    }
  }

  toggleDropdown = (event) => this.setState({isShow: !this.state.isShow})

  hideDropdown = (event) => this.setState({isShow: false})

  render() {
    const isShow = this.state.isShow ? 'show' : '';
    const {
      userName, items, isAuthenticated, avatar
    } = this.props;
    return (
      <ul className="navbar-nav my-account-nav">
        {isAuthenticated ?
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle"
              onClick={this.toggleDropdown}
              onBlur={this.hideDropdown}
            >
              <span className="um-avatar">
                {avatar ?
                  <span className="user-avatar-holder">
                    <img src={avatar} alt={userName}/>
                  </span>
                  :
                  <i className="ion-ios-person-outline" />
                }
              </span>
              <span className="user-name">
                {userName}
              </span>
            </button>
            <div className={`dropdown-menu ${isShow}`}>
              {items.length !== 0 &&
                items.map((menu, index) => {
                  return (
                    <a key={index}
                      className="dropdown-item"
                      href={menu.href}
                    >
                      {menu.icon !== '' &&
                        <i className={menu.icon} />
                      }
                      {menu.name}
                    </a>
                  )
                })
              }
              <a className="dropdown-item"
                onClick={this.callLogout}
                href="#"
              >
                <i className="ion-log-out" />
                Logout
              </a>
            </div>
          </li>
          :
          <li className="nav-item">
            <button className="nav-link"
              onClick={this.callLogin}
            >
              <i className="ion-log-in" />
              sign in
            </button>
          </li>
        }
      </ul>
    );
  }
}
