var express = require('express');
var path = require('path');
var { Liquid } = require('liquidjs');
var engine = new Liquid();

var indexRouter = require('./routes/index');
var createRouter = require('./routes/create');
var destroyRouter = require('./routes/delete');
var updateRouter = require('./routes/edit');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/create', createRouter);
app.use('/delete', destroyRouter);
app.use('/edit', updateRouter);

// register liquid engine
app.engine('liquid', engine.express()); 
app.set('views', './views');            // specify the views directory
app.set('view engine', 'liquid');       // set liquid to default

module.exports = app;