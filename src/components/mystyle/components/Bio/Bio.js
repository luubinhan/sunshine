import React from 'react'
import PropTypes from 'prop-types'

import './Bio.css'

const BioProps = {
  imgUrl: PropTypes.string,
  href: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.any
}
const BIO_DEFAULT_PROPS = {
  imgUrl: '',
  href: '',
  name: '',
  children: ''
}

const Bio = props => {
  return (
    <div className="bio">
      <a href={props.href}
        className="bio-wrapper"
      >
        <div className="bio-img">
          <img src={props.imgUrl}
            alt={props.name}
          />
        </div>
        <div className="bio-content">
          <div className="bio-name">
            {props.name}
          </div>
          <div className="bio-desc">
            {props.children}
          </div>
        </div>
      </a>
    </div>
  )
}
Bio.propTypes = BioProps;
Bio.defaultProps = BIO_DEFAULT_PROPS;

export default Bio;
