const express = require('express');
const {createShortUrl, redirectUser} = require('../controller/urlController');
const router = express.Router();


// url routes
router.post("/url/shortener", createShortUrl);
router.post("/sr/:slug", redirectUser);



// export routes
module.exports = router;