import React from 'react'
import PropTypes from 'prop-types'

const Master = (props) => {
  const cssClass = 'master';
  return (
    <div className={cssClass}>
      <div className="master-inner">
        {props.children}
      </div>
    </div>
  )
}
Master.propTypes = {
  children: PropTypes.node
}

export default Master
