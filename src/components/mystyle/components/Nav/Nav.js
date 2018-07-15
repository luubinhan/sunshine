import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import GatsbyLink, {navigateTo} from 'gatsby-link';
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
      <div className="dropdown-menu">
        {
          props.map((item, index) => {
            return (
              <GatsbyLink key={index}
                to={item.href}
                className='dropdown-item'
              >
                {item.icon !== '' &&
                  <i className={item.icon} />
                }
                {item.name}
              </GatsbyLink>
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
      <ul className={classes}>
        {
          items.map((menu, index) => {
            const hasChildrens = !!((menu.childrens !== undefined && menu.childrens.length !== 0))
            const isDropdownToggle = hasChildrens ? 'dropdown-toggle' : '';
            const classLi = classNames(
              'nav-item',
              hasChildrens ? 'dropdown' : false,
              (selectedKey.toString() === menu.key.toString()) ? 'active' : false,
              menu.className ? menu.className : false,
            );
            return (
              <li key={index}
                className={classLi}
              >
                <GatsbyLink to={menu.href}
                  className={`nav-link ${isDropdownToggle}`}
                >
                  {menu.icon !== '' &&
                  <i className={menu.icon} />
                  }
                  {menu.name}
                </GatsbyLink>
                { hasChildrens ? this.renderChildrenMenu(menu.childrens) : null }
              </li>
            )
          })
        }

      </ul>
    );
  }
}
