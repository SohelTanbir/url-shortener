const express = require('express');
const {createShortUrl, redirectUser} = require('../controller/urlController');
const router = express.Router();


// url routes
router.post("/url/shortener", createShortUrl);
router.get("/sr/:slug", redirectUser);



// export routes
module.exports = router;