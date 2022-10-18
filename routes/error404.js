const express = require('express');
const path = require('path');
const router = express.Router();

const rootdir = require('../utils/path');

router.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootdir, "views", "error404.html"));
})


module.exports = router;