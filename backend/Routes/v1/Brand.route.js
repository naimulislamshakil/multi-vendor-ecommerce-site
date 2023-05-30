const router = require('express').Router();
const BrandHelper = require('../../Helpers/Brand.helpers.js');

router.route('/create').post(BrandHelper.createBrandHelper);
router.route('/getBrandName').get(BrandHelper.getAllBrandName);

module.exports = router;
