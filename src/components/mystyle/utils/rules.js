import * as ErrorMessages from './errorMessages';

export const checkRequired = (text) => {
  if (text) {
    return null;
  }
  return ErrorMessages.isRequired;
}

export const checkEmail = (text) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(text)) {
    return null;
  }
  return ErrorMessages.isEmail;
}

export const checkMustMatch = (field, fieldName) => {
  return (text, state) => {
    return state[field] === text ? null : ErrorMessages.mustMatch(fieldName);
  };
};

export const checkMinLength = (length) => {
  return (text) => {
    return text.length >= length ? null : ErrorMessages.minLength(length);
  };
};
