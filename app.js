require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const { default: mongoStore } = require('connect-mongo');
const methodOverride = require('method-override');

const connectDB = require('./server/routes/config/db');

// create app and connect to database

const app = express()
const PORT = process.env.PORT || 5000

connectDB();

app.use(express.static('public'));

//Templating: EJS + layouts
app.use(expressLayout);
app.set('layout', './layouts/main'); // views/layouts/main.ejs
app.set('view engine', 'ejs');


// Routes
app.use('/', require('./server/routes/main'));
// app.use('/', require('./server/routes/admin')); // uncomment once admin.js exists

// 404 handler: MUST be after all routes
app.use((req, res) => {
  res.status(404).render('404');
});





app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});