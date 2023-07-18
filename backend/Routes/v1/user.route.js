const router = require('express').Router();
const Collaction = require('../../Collactions/user.collaction');

router.route('/register').post(Collaction.createUserCollaction);
router.route('/login').post(Collaction.loginUserCollaction);

module.exports = router;
