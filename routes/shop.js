const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Hello from express</h1>')//utility function to send response - attach body of type any
});

module.exports = router; 
