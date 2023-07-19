const router = require('express').Router();
const Collaction = require('../../Collactions/user.collaction');
const { verifyToken } = require('../../Middleware/verifyToken');

router.route('/register').post(Collaction.createUserCollaction);
router.route('/login').post(Collaction.loginUserCollaction);
router.route('/persistent').get(verifyToken, Collaction.persistentCollaction);

module.exports = router;
