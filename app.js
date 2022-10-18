//const http = require('http');
const express = require('express');
const app = express();    //-----> it is a exported function

//app.use( function(res,req,next) or array of arguments); // use allows to add middleware functions and it pretty flexible in accepting arguments.
app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">SUBMIT</button></form>');
});
app.use('/products',(req, res, next) => {
    //res.send('<h1>Here products will be displayed</h1>');
    console.log(req.body);
    res.redirect('/')
});

app.use('/', (req, res, next) => {
    res.send('<h1> hello to node js </h1>');
});

app.listen(4000, ()=>console.log('server is runnng'));
// const server = http.createServer(app);
// server.listen(4000,()=>console.log('server is running'));