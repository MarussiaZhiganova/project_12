const router = require('express').Router();
const users = require('../data/users.json');


router.get('/', (req, res) => {
  res.send(users);
});

function middleware (req, res, next) {
  const user = users.find((u)=>u._id == req.params.id);
  if (!user) {
    res.status(404);
    return next({"message": "Нет пользователя с таким id" });
  }
  req.user = user;
  next();
}

router.get('/:id', middleware, (req, res) => {
  res.send(req.user);
});

router.put('/:id', middleware, (req, res) => {
  req.user.name = req.body.name;
  res.send(req.user);
});

router.post('/', (req, res) => {
  const username = req.body.username;
  res.send(username)
});
module.exports = router;
