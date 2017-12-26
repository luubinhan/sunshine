import React from 'react'
import PropTypes from 'prop-types'

import './Star.css'

const Star = ({percent = 0, cssClass = ''}) => (
  <div className={`star-ratings-css ${cssClass}`}>
    <div style={{width: `${percent}%`}}
      className="star-ratings-css-top"
    >
      <span /><span /><span /><span /><span />
    </div>
    <div className="star-ratings-css-bottom">
      <span /><span /><span /><span /><span />
    </div>
  </div>

)
Star.propTypes = {
  percent: PropTypes.number.isRequired,
  cssClass: PropTypes.string
}
export default Star
