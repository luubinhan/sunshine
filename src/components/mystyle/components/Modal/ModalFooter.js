import React from 'react';
import PropTypes from 'prop-types';

const ModalFooter = (props) => (
  <div className="modal-footer">
    {props.children}
  </div>
)
ModalFooter.propTypes = {
  children: PropTypes.element
}
export default ModalFooter
