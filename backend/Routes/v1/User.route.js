const router = require('express').Router();
const UserHelper = require('../../Helpers/User.helper');

router.route('/auth/singup').post(UserHelper.createUserHelper);

module.exports = router;
