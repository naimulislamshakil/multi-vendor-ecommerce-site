const router = require('express').Router();
const BrandHelper = require('../../Helpers/Brand.helpers.js');

router.route('/create').post(BrandHelper.createBrandHelper);

module.exports = router;
