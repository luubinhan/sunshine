import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Input, Button} from '../../'

import './FilterBar.css'

const FilterBarProps = {
  showSearch: PropTypes.bool,
  placeholder: PropTypes.string,

  itemsLength: PropTypes.number,
  filterLength: PropTypes.number,

  // function call on search
  handleSearch: PropTypes.func,

  // function to handle reset
  handleReset: PropTypes.func,
  children: PropTypes.node,
}

const FilterBarDefaultProps = {
  showSearch: true,
  placeholder: '',
  handleSearch: null,
  handleReset: null,
  itemsLength: 0,
  filterLength: 0,
  children: null,
}

export default class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: ''
    }
  }

  // Call search
  _changeKeywords = event => {
    this.setState({keywords: event.target.value})

    // Call handle search
    if (typeof this.props.handleSearch === 'function') {
      this.props.handleSearch(event.target.value);
    }
  }

  // Reset search
  _resetKeywords = event => {
    this.setState({keywords: ''});

    // Call handle reset
    if (typeof this.props.handleReset === 'function') {
      this.props.handleReset();
    }
  }

  render() {
    const {
      showSearch,
      filterLength,
      itemsLength
    } = this.props;
    const {
      keywords
    } = this.state;
    return (
      <div className="filterbar">
        <div className="filterbar-form">
          {this.props.children &&
          <div className="filter-group">
            {this.props.children}
          </div>
          }

          <div className="filter-group">
            {`Shown ${filterLength}/${itemsLength}`}
          </div>
          {showSearch &&
          <div className="filter-group">
            <div className="input-group search-form">
              <Input value={keywords}
                onChange={this._changeKeywords}
                placeholder={this.props.placeholder}
              />
              <span className="input-group-btn">
                <Button primary
                  onClick={this._resetKeywords}
                >
                  {keywords ? <i className="ion-ios-close-outline" /> : <i className="ion-ios-search" /> }
                </Button>
              </span>
            </div>
          </div>
          }
        </div>
      </div>
    )
  }
}

FilterBar.propTypes = FilterBarProps;
FilterBar.defaultProps = FilterBarDefaultProps;
