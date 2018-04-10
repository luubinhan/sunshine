import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import Button from '../Button'

import './Search.css'

export default class Search extends Component {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  }
  static defaultProps = {
    placeholder: ''
  }
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
    const {keywords} = this.state;
    return (
      <div className="input-group search-form">
        <input type="text" onChange={this._changeKeywords} value={this.state.keywords} className="form-control" placeholder={this.props.placeholder} />
        <span className="input-group-append">
          <Button primary
            onClick={this._resetKeywords}
          >
            {keywords ? <i className="ion-ios-close-outline" /> : <i className="ion-ios-search" /> }
          </Button>
        </span>
      </div>
    )
  }
}

