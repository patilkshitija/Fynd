const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  const name = req.body.name;
  const message = `Hello, ${name}!`;
  res.send(message);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
