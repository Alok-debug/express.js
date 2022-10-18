const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    
    res.send('<h2>Page not found: 404 </h2>'); 
})


module.exports = router;