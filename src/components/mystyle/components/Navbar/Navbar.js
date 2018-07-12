import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

import './Navbar.css'

export default class Navbar extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    bg: PropTypes.string,
    className: PropTypes.string,
    fixed: PropTypes.string,
  }

  static defaultProps = {
    bg: '',
    className: 'primary-menu',
    fixed: ''
  }

  static contextTypes = {
    router: PropTypes.object
  }
  checkActive = (href) => {
    console.log(this.context)
    //return this.context.router.isActive(href);
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

  render() {
    const {
      items,
      className,
      bg,
      fixed
    } = this.props;
    const classes = classNames(
      className,
      //bg === 'light' ? 'navbar-light' : 'navbar-dark',
      fixed === '' ? '' : `fixed-${fixed}`,
      `bg-${bg}`,
      'navbar navbar-expand-lg'
    )
    return (
      <div className={classes}>
        <div className="collapse navbar-collapse">
          <ul className='navbar-nav'>
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
