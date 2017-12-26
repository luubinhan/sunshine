import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../../components/Input';

import './index.css';

export default class Signup extends Component {
  static propTypes = {
    /*
    Function to handle login
		 */
    handleSignup: PropTypes.func.isRequired,

    title: PropTypes.string,

    /*
    Description text after title
    */
    desc: PropTypes.string,

    forgotPasswordHref: PropTypes.string.isRequired,

    signInHref: PropTypes.string.isRequired,

    termOfService: PropTypes.string,

    privacyPolicy: PropTypes.string,
  };

  static defaultProps = {
    title: 'Sign up',
    desc: '',
    termOfService: '#',
    privacyPolicy: '#',
  };

  // call login
  _onClickSignup = (event) => {
    this.props.handleSignup(event, this.state);
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      title,
      desc,
      signInHref,
    } = this.props;
    return (
      <div className="section section-signup">
        <div className="mystyle-signup-box">
          {title &&
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
            <form className="signup-form">
              <Input label="Username"
                type="text"
                name="username"
                placeholder="Pick a username"
                required
              />
              <Input label="Email address" type="email"
                name="email"
                placeholder="you@example.com"
              />
              <Input label='Password'
                type="password"
                name="password"
                placeholder="Create a password"
                required
              />          
              <button type="button"
                      className="btn-signup"
                      onClick={this._onClickSignup}
              >
                Sign up
              </button>
            </form>
            <div className="form-text text-muted align-center">
              By clicking "Sign up for GitHub", you agree to our <a href={this.props.termOfService}>terms of
              service</a> and <a href={this.props.privacyPolicy}>privacy policy</a>. We’ll occasionally send you account
              related emails.
            </div>
          </div>

          {signInHref &&
          <div className="get-sign-up">
            Already have an account? <a href={signInHref}>Sign in</a>
          </div>
          }
        </div>
      </div>

    );
  }
}
