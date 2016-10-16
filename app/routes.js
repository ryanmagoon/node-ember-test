module.exports = (app) => {
  app.get('*', (req, res) => {
    res.sendfile('./public/index.html'); // load our public/index.html file
  });
};
