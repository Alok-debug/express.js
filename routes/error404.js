const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    
    res.send('<h1>Page not found: 404 </h1>'); 
})


module.exports = router;