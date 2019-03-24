const express = require('express');
const routes = require('./routes');

function bootstrap() {
  // if (!process.env.NODE_ENV || !process.env.PORT) {
  //   console.error('Env variables are missing.');
  //   process.exit(1);
  // }

  const app = express();
  const port = process.env.PORT || 5000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
  });

  app.use('/api', routes);

  app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
}

module.exports.bootstrap = bootstrap;
