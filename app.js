const express = require('express');
const bodyParser = require('body-parser');

const app = express();    //-----> it is a exported function

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/error404');
const contactRoutes = require('./routes/contact_us');
const successRoutes = require('./routes/success');


app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);
app.use(errorRoutes);

app.listen(4000, ()=>console.log('server is runnng'));
// const server = http.createServer(app);
// server.listen(4000,()=>console.log('server is running'));