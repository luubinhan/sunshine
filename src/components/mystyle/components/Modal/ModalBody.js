import React from 'react';
import PropTypes from 'prop-types'


const ModalBody = (props) => (
  <div className="modal-body">
    {props.children}
  </div>
)
ModalBody.propTypes = {
  children: PropTypes.element
}
export default ModalBody
