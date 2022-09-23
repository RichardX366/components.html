const routeComponentsScript = (app, route) => {
  app.use(require('express').static('public', route));
};

export default routeComponentsScript;
