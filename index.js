Object.defineProperty(exports, '__esModule', { value: true });
const routeComponentsScript = (app, route) => {
  app.use(require('express').static('public', route));
};
exports.default = routeComponentsScript;
