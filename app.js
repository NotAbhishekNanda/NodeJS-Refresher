const express =require('express');
const bodyParser = require('body-parser');

const app = express();
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// At this point this will set a certain way for handling incoming request

//Middleware:

/*Dummy Middleware to illustrate next();
app.use((req, res, next) => {
    console.log('In the Middle ware');
    next();// Allow the request to go to the next middle ware line
});
*/

//If you are not calling next function then you should send some response 

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    console.log('This always runs');
    next();
});
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>')
})


//next method allows the request to through the next middle ware.
//use allows us to add amiddle ware function
//It accepts an array of request handlers

app.listen(3000);
