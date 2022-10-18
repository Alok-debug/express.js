const express = require('express');
const bodyParser = require('body-parser');

const app = express();    //-----> it is a exported function

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/error404');


app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

app.listen(4000, ()=>console.log('server is runnng'));
// const server = http.createServer(app);
// server.listen(4000,()=>console.log('server is running'));