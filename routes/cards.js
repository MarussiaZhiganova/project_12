const router = require('express').Router();
const cards = require('../data/cards.json');


router.get('/', (req, res) => {
  res.send(cards);
});

function middleware (req, res, next) {
  const card = cards.find((c)=>c._id == req.params.id);
  if (!card) {
    res.status(404);
    return next({"message": "Нет пользователя с таким id" });
  }
  req.card = card;
  next();
}

router.get('/:id', middleware, (req, res) => {
  res.send(`get with id: ${req.params.id}`);
});

router.put('/:id', middleware, (req, res) => {
  req.card.name = req.body.name;
  res.send(req.card);
});

router.post('/', (req, res) => {
 res.send(`post`)
});
module.exports = router;