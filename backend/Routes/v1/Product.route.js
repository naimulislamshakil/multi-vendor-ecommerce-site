const router = require('express').Router();
const ProductHelper = require('../../Helpers/Product.helper');

router.route('/create').post(ProductHelper.createProductHelper);

module.exports = router;
