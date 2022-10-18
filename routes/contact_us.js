const express = require('express');
const path = require('path');

const router = express.Router();

const rootdir = require('../utils/path');

router.get('/contact_us', (req, res, next) => {
    //res.send('<form action="/product" method="POST"> <input type="text" name="title" placeholder="Enter title here"><input type="text" name="size_of_item" placeholder="enter your size here!!!"> <button type ="submit"> Add Product</button> </form>');
    //res.sendFile(path.join(__dirname, "..", "views", "contact_us.html"));
    res.sendFile(path.join(rootdir, "views", "contact_us.html"));
});


router.post('/contact_us',(req, res, next) => {
    res.redirect('/success');
});


module.exports = router;
