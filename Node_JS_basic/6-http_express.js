const express = require('express');

const app = express();
const port = 1245;
// const port = process.argv[3];
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
// listen on port
app.listen(port, () => {
  //   console.log(`Example app listening at http://localhost:${port}`);
});
// export app
module.exports = app;
