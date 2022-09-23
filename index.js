Object.defineProperty(exports, '__esModule', { value: true });
const routeComponentsScript = (app) => {
  app.get(__dirname + '/__components.js', (req, res) => {
    res.sendFile('public/__components.js');
  });
  app.get(__dirname + '/__components.css', (req, res) => {
    res.sendFile('public/__components.css');
  });
};
exports.default = routeComponentsScript;
