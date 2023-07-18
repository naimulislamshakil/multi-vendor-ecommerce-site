const router = require('express').Router();
const Collaction = require('../../Collactions/user.collaction');

router.route('/register').post(Collaction.createUserCollaction);

module.exports = router;
