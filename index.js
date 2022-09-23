Object.defineProperty(exports, '__esModule', { value: true });
const routeComponentsScript = (app) => {
  app.get('/__components.js', (req, res) => {
    res.sendFile(require('path').resolve(__dirname, '../public/components.js'));
  });
  app.get('/__components.css', (req, res) => {
    res.sendFile(
      require('path').resolve(__dirname, '../public/components.css'),
    );
  });
};
exports.default = routeComponentsScript;
