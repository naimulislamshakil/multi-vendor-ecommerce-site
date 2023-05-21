const router = require('express').Router();
const { verifyToken } = require('../../Configs/verifyToken');
const UserHelper = require('../../Helpers/User.helper');

router.route('/auth/singup').post(UserHelper.createUserHelper);
router.route('/auth/login').post(UserHelper.loginUserHelper);
router.route('/auth/getUser').get(verifyToken, UserHelper.getUserHelper);

module.exports = router;
