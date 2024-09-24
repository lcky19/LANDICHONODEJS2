const express = require('express');
const router = express.Router();
const hp = require('../controller/HpController');
router.get('/', hp.nom);
router.get('/about', hp.about);
router.get('/cart', hp.cart);
router.get('/checkout', hp.checkout);
router.get('/contact', hp.contact);
router.get('/blog', hp.blog);
router.get('/services', hp.services);
router.get('/shop', hp.shop);
router.get('/thankyou', hp.thankyou);

module.exports = router;
