const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');

module.exports.getUser = (req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Произошла ошибка при чтении файла' });
    }
    let users;
    try {
      users = JSON.parse(data);
    } catch (e) {
      console.error(e);
      return res.status(400).send('Bad json format');
    }
    const user = users.find((u) => u._id === req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
    res.status(200).send(user);
  });
};

module.exports.getUsers = (req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Произошла ошибка при чтении файла' });
    }
    let users;
    try {
      users = JSON.parse(data);
    } catch (e) {
      console.error(e);
      return res.status(400).send('Bad json format');
    }
    if (!users) {
      return res.status(404).send({ message: 'Нет пользователя' });
    }
    res.status(200).send(users);
  });
};
