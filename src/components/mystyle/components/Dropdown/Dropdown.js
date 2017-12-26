import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

import './Dropdown.css'

import Button from './../Button'

export default class Dropdown extends Component {
  static propTypes = {

    /*
    is outline
     */
    outline: PropTypes.bool,

    /*

     */
    color: PropTypes.string,

    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    right: PropTypes.bool,

    children: PropTypes.any,

    keepOnFocus: PropTypes.bool,
    isOpen: PropTypes.bool,

    className: PropTypes.string,
    cssModule: PropTypes.object,
  }

  static defaultProps = {
    outline: false,
    color: 'secondary',
    right: false,
    children: null,
    title: '',
    className: '',
    keepOnFocus: false,
    isOpen: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
      selectedvalue: props.title,
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.state.isOpen) {
      this.setState({isOpen: nextProps.isOpen})
    }
  }

  toggleDropdown = (event) => {
    this.setState({isOpen: !this.state.isOpen});
  }

  hideDropdown = (event) => {
    !this.props.keepOnFocus && this.setState({ isOpen: false })
  }

  _changeSelectedValue = (selectedvalue) => this.setState({selectedvalue: selectedvalue, isOpen: false})

  render() {
    const {
      color,
      outline,
      title,
      className,
      cssModule
    } = this.props;
    const open = this.state.isOpen ? 'show' : '';
    const pullRight = this.props.right ? 'dropdown-menu-right' : '';
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child) => React.cloneElement(child, {
        selectedvalue: this.state.selectedvalue,
        changeSelectedValue: this._changeSelectedValue
      })
    );
    console.log(childrenWithProps)
    const classes = mapToCssModules(classNames(
      className,
      color,
      open,
      'dropdown'
    ), cssModule);
    return (
      <div className={classes}
        onBlur={this.hideDropdown}
        tabIndex="0"
      >
        {(typeof title === 'string') ?
          <Button outline={outline}
            tag="a"
            color={color}
            onClick={this.toggleDropdown}
            
          >
            {this.state.selectedvalue}
            <i className="ion-ios-arrow-down" style={{paddingLeft: 5}} />
          </Button>
          :
          <Button outline={outline}
            tag="a"
            color={color}
            onClick={this.toggleDropdown}
            style={{borderRadius: '4px'}}
          >
            {title()}
            <i className="ion-ios-arrow-down" style={{paddingLeft: 5}} />
          </Button>
        }
        <div className={`dropdown-menu ${open} ${pullRight}`}
          aria-labelledby="dropdownMenuButton"
        >
          <div className="pl-2 pr-2">
            {childrenWithProps}
          </div>
        </div>
      </div>
    );
  }
}
