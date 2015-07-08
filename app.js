var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var sm = require('sitemap');

var routes = require('./routes/index');

var app = express();

// Configure Views Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('layout', 'layouts/default');
app.set('partials', {
  header  : 'partials/global/header',
  meta    : 'partials/global/meta',
  styles  : 'partials/global/styles',
  scripts : 'partials/global/scripts',
  footer  : 'partials/global/footer',
});
app.enable('view cache');
app.engine('html', require('hogan-express'));

app.locals.siteName = "Express Default Scaffold";
app.locals.siteURI = "http://127.0.0.1";

// Configure Common Default Settings
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/files', express.static(path.join(__dirname, 'public/files')));

// Define Application Routes
app.use('/', routes);

// Configure Sitemap.XML Response
var sitemap = sm.createSitemap ({
  hostname: 'http://127.0.0.1',
  cacheTime: 600000,        // 600 sec - cache purge period 
  urls: [
    { url: '/',  changefreq: 'daily', priority: 0.9 },
  ]
});

// Error Handling
// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Define error handlers
// Development environment error handling
if (app.get('env') === 'development') {
  app.set('json spaces', 2);
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production environment error handling
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
