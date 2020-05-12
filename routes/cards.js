const router = require('express').Router();
const routerCards = require('../controllers/cardController');

router.get('/', routerCards.getCards);
module.exports = router;
