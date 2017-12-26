import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PasswordMask extends Component {
  static propTypes = {
    value: PropTypes.any.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    onToggle: PropTypes.func,
    useVendorStyles: PropTypes.bool,
    showButtonContent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]),
    hideButtonContent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ])
  }

  static defaultProps = {
    placeholder: '',
    onChange() {},
    onKeyDown() {}
  }

  state = {
    passwordShown: false,
    hasBeenFocused: false
  }

  componentWillUpdate(nextProps, nextState) {
    const { passwordShown } = this.state;

    if (nextState.passwordShown !== passwordShown) {
      this.invokeCallbacks(nextProps.value, nextState.passwordShown);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { passwordShown, hasBeenFocused } = this.state;

    if (hasBeenFocused && prevState.passwordShown !== passwordShown) {
      this.focusVisibleInput();
    }
  }

  invokeCallbacks(value, passwordShown) {
    const { onShow, onHide, onToggle } = this.props;

    if (onToggle) {
      onToggle(value);
    }

    if (onShow && passwordShown) {
      onShow(value);
    }

    if (onHide && !passwordShown) {
      onHide(value);
    }
  }

  focusVisibleInput() {

  }

  togglePasswordMask() {
    this.setState({ passwordShown: !this.state.passwordShown });
  }

  render() {
    const {
      value,
      id,
      name,
      placeholder,
      onChange,
      onKeyDown,
      showButtonContent,
      hideButtonContent
    } = this.props;
    const { passwordShown } = this.state;

    return (
      <div className="input-group"
        style={{ position: 'relative' }}
      >

        <div className="input-group-addon"><i className="ion-key" /></div>
        <input
          type={passwordShown ? 'text' : 'password'}
          ref={input => this.passwordInput = input}
          value={value}
          id={!passwordShown ? id : ''}
          name={!passwordShown ? name : ''}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={() => this.setState({ hasBeenFocused: true })}
        />
        <div className="input-group-btn">
          <a
            className="btn btn-outline-secondary"
            href="#"
            onMouseDown={e => e.preventDefault()}
            onClick={e => {
              e.preventDefault();
              this.togglePasswordMask();
            }}
            tabIndex={-1}
          >
            {passwordShown ?
              hideButtonContent || <i className="ion-eye-disabled" /> :
              showButtonContent || <i className="ion-eye" />
            }
          </a>
        </div>
      </div>
    );
  }
}
