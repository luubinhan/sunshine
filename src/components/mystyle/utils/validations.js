export const ruleRunner = (name, ...validations) => {
  return (state) => {
    for (let v  of validations) {
      let errorMessageFunc = v(state);
      if (errorMessageFunc) {
        return {message: errorMessageFunc(name)};
      }
    }
    return null;
  };
};
/**
 * Combine all result for all the rules
 */
export const runValidate = (state, runners) => {
  return runners.reduce((memo, runner) => {
    return Object.assign(memo, runner(state))
  }, {})
}
