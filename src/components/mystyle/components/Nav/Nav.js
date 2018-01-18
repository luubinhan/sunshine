import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

import './Nav.css'

export default class Nav extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    tab: PropTypes.bool,
    pill: PropTypes.bool,
    fill: PropTypes.bool,
    hoverToOpen: PropTypes.bool,
    /*
    Display in vertical mode
    */
    vertical: PropTypes.bool,
    selectedKey: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    tab: false,
    pill: false,
    fill: false,
    vertical: false,
    hoverToOpen: true,
    selectedKey: ''
  }
  renderChildrenMenu = (props) => {
    return (
      <div className="dropdown-menu"
        aria-labelledby="navbarDropdownMenuLink"
      >
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
      cssModule,
      tab,
      pill,
      fill,
      vertical,
      hoverToOpen,
      selectedKey,
      ...attributes
    } = this.props;
    const classes = mapToCssModules(classNames(
      className,
      'nav',
      tab ? 'nav-tabs' : false,
      pill ? 'nav-pills' : false,
      fill ? 'nav-fill' : false,
      vertical ? 'flex-column' : false,
      hoverToOpen ? 'hover-top-open' : false,
    ), cssModule);
    return (
      <ul className={classes} {...attributes}>
        {
          items.map((menu, index) => {
            const isActive = selectedKey.toString() === menu.key.toString() ? 'active' : '';
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
    );
  }
}
