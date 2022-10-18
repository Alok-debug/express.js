const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"> <input type="text" name="title" placeholder="Enter title here"><input type="text" name="size_of_item" placeholder="enter your size here!!!"> <button type ="submit"> Add Product</button> </form>');
});


router.post('/product',(req, res, next) => {
    console.log(req.body.size_of_item);
    res.redirect('/');
});


module.exports = router;
