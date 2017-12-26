import React, { cloneElement, Children, Component } from 'react';
import PropTypes from 'prop-types';

import './Steps.css'

export default class Steps extends Component {
  static propTypes = {
    children: PropTypes.any,
    current: PropTypes.number
  }
  static defaultProps = {
    current: 0,
  }
  render() {
    const {
      children,
      current
    } = this.props;
    return (
      <div className="step-block">
        <ol className="steps">
          {
            Children.map(children, (child, index) => {
              if (!child) {
                return null;
              }
              const childProps = {
                stepNumber: `${index + 1}`,
                ...child.props,
              };
              if (!child.props.status) {
                if (index === current) {
                  childProps.status = 'active';
                } else if (index < current) {
                  childProps.status = 'over';
                } else {
                  childProps.status = 'wait';
                }
              }
              return cloneElement(child, childProps);
            })
          }
        </ol>
      </div>
    )
  }
}
