const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); //Used to parse JSON bodies

app.get('/status/express', async (req, res) => {
  res.json({
    'express': 'running!' } 
  );
});

const server = app.listen(port, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`Listening on port ${port}`)
  }
});

const dispose = () => {
  server.close();
}

module.exports = {
  app,
  dispose
}
