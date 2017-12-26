import React from 'react';
import PropTypes from 'prop-types';

export default class Step extends React.Component {
  static propTypes = {
    handleClick: PropTypes.func,
    status: PropTypes.string,
    stepNumber: PropTypes.string,
    title: PropTypes.any,
    children: PropTypes.any
  }
  static defaultProps = {
    handleClick: null,
  }
  _handleClick = event => {
    if (typeof this.props.handleClick === 'function') {
      this.props.handleClick(event.currentTarget.dataset.step)
    }
  }
  render() {
    const {
      status = 'wait',
      stepNumber,
      title,
      ...restProps
    } = this.props;
    return (
      <li className={`step-${status}`}
        {...restProps}
        data-step={this.props.stepNumber}
        onClick={this._handleClick}
      >
        <div className="step-link">
          <span className="step-count">
            {stepNumber}
          </span>
          <span className="step-name">
            {title}
          </span>
        </div>
      </li>
    );
  }
}
