import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Input, CustomCheckbox, PasswordMask} from '../../index'

import './index.css';

export default class Login extends Component {
  static propTypes = {
    /*
    Function to handle login
		 */
    handleLogin: PropTypes.func.isRequired,

    handleLoginFacebook: PropTypes.func,

    handleLoginGoogle: PropTypes.func,

    title: PropTypes.string,

    /*
    Description text after title
    */
    desc: PropTypes.string,

    showSocialLogin: PropTypes.bool,

    forgotPasswordHref: PropTypes.string.isRequired,

    signUpHref: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: 'Sign in',
    desc: '',
    showSocialLogin: true,
    handleLoginFacebook: null,
    handleLoginGoogle: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        email: '',
        password: '',
        remember: false,
      },
    };
  }

  // call login
  _onClickLogin = (event) => {
    this.props.handleLogin(event, this.state);
  };

  // call login facebook
  _onLoginFacebook = (event) => {
    if (typeof this.props.handleLoginFacebook === 'function') {
      this.props.handleLoginFacebook(event, this.state);
    }
  };

  // call login google
  _onLoginGoogle = (event) => {
    if (typeof this.props.handleLoginGoogle === 'function') {
      this.props.handleLoginGoogle(event, this.state);
    }
  };

  changeEmail = (event) => {
    const newFormValue = Object.assign({}, this.state.formValue);
    newFormValue.email = event.target.value;
    this.setState({ formValue: newFormValue });
  };

  changePassword = (event) => {
    const newFormValue = Object.assign({}, this.state.formValue);
    newFormValue.password = event.target.value;
    this.setState({ formValue: newFormValue });
  };

  changeRemember = (event) => {
    const newFormValue = Object.assign({}, this.state.formValue);
    newFormValue.remember = event.target.checked;
    this.setState({ formValue: newFormValue });
  };

  render() {
    const {
      title,
      desc,
      showSocialLogin,
      forgotPasswordHref,
      signUpHref,
    } = this.props;
    return (
      <div className="section section-login">
        <div className="mystyle-signin-box">
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
            {showSocialLogin &&
            <div className="social-login-block">
              <div className="sign-in-with">
                Sign in with…
              </div>
              <div className="social-login clearfix">
                <a className="login-facebook"
                   href="#"
                   onClick={this._onLoginFacebook}
                >
                  <i className="ion-social-facebook"/>
                  Facebook
                </a>
                <a className="login-google"
                   href="#"
                   onClick={this._onLoginGoogle}
                >
                  <i className="ion-social-googleplus"/>
                  Google
                </a>
              </div>
              <div className="signin-with-credentials">
                <span>Or sign in with credentials</span>
              </div>
            </div>
            }

            <form className="login-form">
              <Input label="Email address" type="email" required />
              <div className="form-group">
                <label htmlFor="">Password</label>
                <PasswordMask value={this.state.formValue.password}
                              onChange={this.changePassword}
                />
              </div>
              <div className="clearfix">
                <div className="pull-left">
                  <CustomCheckbox label="Remember me"
                                  checked={this.state.formValue.remember}
                                  onChange={this.changeRemember}
                  />
                </div>
                {forgotPasswordHref &&
                <div className="pull-right">
                  <a href={forgotPasswordHref}>Forgot password?</a>
                </div>
                }
              </div>
              <button type="button"
                      className="btn-signup"
                      onClick={this._onClickLogin}
              >
                Secure Login
              </button>
            </form>
          </div>
          {signUpHref &&
          <div className="get-sign-up">
            Don't have an account? <a href={signUpHref}>Get Started</a>
          </div>
          }
        </div>
      </div>

    );
  }
}
