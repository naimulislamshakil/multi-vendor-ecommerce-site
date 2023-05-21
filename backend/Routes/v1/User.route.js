const router = require('express').Router();
const UserHelper = require('../../Helpers/User.helper');

router.route('/auth/singup').post(UserHelper.createUserHelper);
router.route('/auth/login').post(UserHelper.loginUserHelper);

module.exports = router;
