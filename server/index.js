const express = require('express');
const router = express.Router();

function bootstrap() {
  if (!process.env.NODE_ENV || !process.env.PORT) {
    console.error('Env variables are missing.');
    process.exit(1);
  }

  const app = express();
  const port = process.env.PORT || 5000;
  const www = process.env.WWW || './'

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(express.static(www));
  app.use('/api', [
    router.use('/download', (req, res) => {
      res.sendStatus(200);
    })
  ]);
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: www });
  });
  app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
}

module.exports.bootstrap = bootstrap;
