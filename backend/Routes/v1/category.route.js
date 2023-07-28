const router = require('express').Router();
const Collaction = require('../../Collactions/category.collaction');
const cloudinary = require('cloudinary').v2;

router.route('/').post();

module.exports = router;
