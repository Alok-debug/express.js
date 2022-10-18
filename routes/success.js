const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/success', (req, res, next) => {
    //res.send('<form action="/product" method="POST"> <input type="text" name="title" placeholder="Enter title here"><input type="text" name="size_of_item" placeholder="enter your size here!!!"> <button type ="submit"> Add Product</button> </form>');
    console.log('reaching in success');
    res.sendFile(path.join(__dirname, "../", "views", "success.html"));
});

module.exports = router;