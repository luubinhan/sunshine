import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './DashboardSidebar.css'

export default class DashboardSidebar extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  static defaultProps = {
    items: [],
  }

  static contextTypes = {
    router: PropTypes.object
  }

  renderChildrenMenu = (props) => {
    return (
      <div className="dropdown-menu">
        {
          props.map((item, index) => {
            return (
              <a key={index}
                href={item.href}
                className='dropdown-item'
              >
                {item.icon !== '' &&
                  <i className={item.icon} />
                }
                {item.name}
              </a>
            )
          })
        }
      </div>
    )
  }

  checkActive = (href) => {
    return this.context.router.isActive(href);
  }

  render() {
    const {items} = this.props;
    return (
      <div className="navbar navbar-expand-lg sidebar">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            {
              items.map((menu, index) => {
                const isActive = (this.checkActive(menu.href)) ? 'active' : '';
                const hasChildrens = !!((menu.childrens !== undefined && menu.childrens.length !== 0))
                const isDropdown = hasChildrens ? 'dropdown' : '';
                const isDropdownToggle = hasChildrens ? 'dropdown-toggle' : '';
                return (
                  <li key={index}
                    className={`nav-item ${isActive} ${isDropdown}`}
                  >
                    <a href={menu.href}
                      className={`nav-link ${isDropdownToggle}`}
                    >
                      {menu.icon !== '' &&
                        <i className={menu.icon} />
                      }
                      {menu.name}
                    </a>
                    { hasChildrens ? this.renderChildrenMenu(menu.childrens) : null }
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
