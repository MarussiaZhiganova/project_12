const express = require('express');

const { PORT = 3000 } = process.env;
const app = express();

const routerUsers = require('./routes/users.js');
app.use('/users', routerUsers);

const routerCards = require('./routes/cards');
app.use('/cards', routerCards);

const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
