const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-products', (req, res, next) => {

    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')//utility function to send response - attach body of type any
       res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));

});


// /admin/add-product => POST
router.post('/product', (req,res,next) => {
    console.log(req.body);// By Default express does not parse the incoming request body
    res.redirect('/');

})


module.exports = router;
