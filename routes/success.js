const express = require('express');
const path = require('path');
const router = express.Router();

const rootdir = require('../utils/path');
router.use('/success', (req, res, next) => {
    //res.send('<form action="/product" method="POST"> <input type="text" name="title" placeholder="Enter title here"><input type="text" name="size_of_item" placeholder="enter your size here!!!"> <button type ="submit"> Add Product</button> </form>');
    console.log('reaching in success');
    res.sendFile(path.join(rootdir, "views", "success.html"));
});

module.exports = router;