import express from 'express';

const routeComponentsScript = (app, route) => {
  app.use(express.static('public', route));
};

export default routeComponentsScript;
