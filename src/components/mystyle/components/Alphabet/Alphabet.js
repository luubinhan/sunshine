import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Alphabet.css'

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export default class Alphabet extends Component {
  static propTypes = {
    /*
    Call when click
     */
    handleClick: PropTypes.func.isRequired,

    alphabet: PropTypes.array,
  }
  static defaultProps = {
    alphabet: ALPHABET.map((i, k) => {
      return {char: i, key: k, isEmpty: false}
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: ''
    }
  }
  _changeSelected = event => {
    const {char} = event.currentTarget.dataset;
    this.setState({ selectedKey: char});

    if (this.props.handleClick !== null) {
      this.props.handleClick(event, char);
    }
  }
  render() {
    const {alphabet} = this.props;
    return (
      <div className='alphabet-component'>
        <span className={`character all-character ${this.state.selectedKey === '' ? 'active' : ''}`}
          data-char=""
          onClick={this._changeSelected}
        >
        All
        </span>
        {alphabet.map((c, index) => {
          return (
            <span
              key={index}
              className={`character ${c.char}-character ${this.state.selectedKey === c.char ? 'active' : ''} ${c.isEmpty ? 'empty' : 'notempty'}`}
              data-char={c.char}
              onClick={this._changeSelected}
            >
              {c.char}
            </span>
          )
        })}
      </div>
    );
  }
}
