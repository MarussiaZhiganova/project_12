const express = require('express');

const { PORT = 3000 } = process.env;
const app = express();

const routerUsers = require('./routes/users');
const routerCards = require('./routes/cards');


app.use('/users', routerUsers);
app.use('/cards', routerCards);


// eslint-disable-next-line import/order
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
