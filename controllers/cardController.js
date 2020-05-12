const fs = require('fs');
const path = require('path');

const cardsPath = path.join(__dirname, '../data/cards.json');

module.exports.getCards = (req, res) => {
  fs.readFile(cardsPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res.status(500).send('err');
    }
    let cards;
    try {
      cards = JSON.parse(data);
    } catch (e) {
      console.error(e);
      return res.status(400).send('Bad json format');
    }
    if (!cards) {
      return res.status(404).send({ message: 'Нет пользователя' });
    }
    res.status(200).send(cards);
  });
};
