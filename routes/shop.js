const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('<h1>Hello from express</h1>')//utility function to send response - attach body of type any
       res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router; 
