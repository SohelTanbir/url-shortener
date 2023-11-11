const express = require('express');
const createShortUrl = require('../controller/urlController');
const router = express.Router();


// url routes
router.post("/url/shortener", createShortUrl);



// export routes
module.exports = router;