const router = require('express').Router();
const routerUsers = require('../controllers/userController');

router.get('/:id', routerUsers.getUser);
router.get('/', routerUsers.getUsers);
module.exports = router;
