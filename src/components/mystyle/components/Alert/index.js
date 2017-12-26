import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Alert extends Component {
  static propTypes = {

    /*
		color: primary, secondary, success, danger, warning, info, light, dark
		 */
    color: PropTypes.string,

    dismissible: PropTypes.bool,

    children: PropTypes.node
  }

  static defaultProps = {
    color: 'secondary',
    dismissible: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      cssClass: 'alert-dismissible fade show'
    }
  }

  _hide = () => this.setState({ cssClass: 'alert-dismissible fade hide' })

  render() {
    const { color, dismissible } = this.props;
    const { cssClass } = this.state;
    return (
      <div className={`alert  ${cssClass} badge-${color}`}>
        {this.props.children}
        { dismissible &&
          <button onClick={this._hide}
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        }
      </div>
    );
  }
}
