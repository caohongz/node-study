module.exports.compose = (middlewares) => {
  if (middlewares.length === 0) {
    return () => {};
  }

  return (next = async () => {}) =>
    middlewares.reduce((a, b) => (arg) => a(() => b(arg)))(next);
};
