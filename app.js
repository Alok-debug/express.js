const http = require('http');
const express = require('express');
const app = express();    //-----> it is a exported function

//app.use( function(res,req,next) or array of arguments); // use allows to add middleware functions and it pretty flexible in accepting arguments.
app.use((req, res, next) => {
    console.log('in the middle ware');
    next();
});

app.use((req, res, next) => {
    res.send('<h1> hello to node js </h1>');
    
});
const server = http.createServer(app);
server.listen(4000,()=>console.log('server is running'));