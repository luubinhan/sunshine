import React from 'react'
import PropTypes from 'prop-types'

const Container = (props) => {
  const cssClass = props.fluid ? 'container-fluid' : 'container';
  return (
    <div className={cssClass}>
      {props.children}
    </div>
  )
}
Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.any
}
Container.defaultProps = {
  fluid: false,
  children: null
}
export default Container
