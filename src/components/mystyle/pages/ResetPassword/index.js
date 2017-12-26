import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ResetPassword extends Component {
  static propTypes = {
    /*
    Function to handle login
		 */
    handleLogin: PropTypes.func.isRequired,

    title: PropTypes.string,

    desc: PropTypes.string,
  }

  static defaultProps = {
    title: 'Reset password',
    desc: 'Enter the email address associated with your account, and we’ll email you a link to reset your password.',
  }

  handleSubmit = (event) => {
    console.log(this.emailInput.value);
    event.preventDefault();
  }

  render() {
    const {
      title,
      desc
    } = this.props;
    return (
      <div className="section section-login">
        <div className="mystyle-signin-box">
          { title &&
          <h1 className="login-title">
            {title}
          </h1>
          }
          {desc &&
          <div className="login-desc">
            {desc}
          </div>
          }
          <div className="white-box">
            <form className="login-form"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="">Email address</label>
                <div className="input-group">
                  <div className="input-group-addon"><i className="ion-email" /></div>
                  <input type="email"
                    className="form-control"
                    ref={emailInput => this.emailInput = emailInput}
                  />
                </div>
              </div>
              <button
                className="btn-signup"
                type="submit"
              >
                Send Reset Link
              </button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}
