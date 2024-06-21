const express = require('express');

const {
    mainPage,
    privacyPage,
    cookiesPage,
    portfolioPage,
    notFoundPage,
} = require('./controllers.js');

const router = express.Router();

router.get('/', mainPage);
router.get('/politica-de-privacidad', privacyPage);
router.get('/politica-de-cookies', cookiesPage);
router.get('/portafolio', portfolioPage);
router.get('/*', notFoundPage);

module.exports = {
    router,
};