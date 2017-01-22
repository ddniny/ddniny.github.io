// Babel ES6/JSX Compiler
require('babel-register')({
  presets: [ 'es2015', 'react' ]
});

// import { Router, RouterContext } from 'react-router';
var path = require('path');
var express = require('express');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var swig  = require('swig'); // A simple, powerful, and extendable templating engine for node.js and browsers, similar to Django, Jinja2, and Twig.
var _ = require('underscore');

// var config = require('./config');
var routes = require('./app/routes');
// var Character = require('./models/character');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // server side rendering
      var html = ReactDOM.renderToString(React.createElement(Router.RouterContext, renderProps)); 
      var page = swig.renderFile('index.html', { html: html }); 
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

app.use(function(err, req, res, next) {
  console.log(err.stack.red);
  res.status(err.status || 500);
  res.send({ message: err.message });
});

// /**
//  * Socket.io stuff.
//  */
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
// var onlineUsers = 0;

// io.sockets.on('connection', function(socket) {
//   onlineUsers++;

//   io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

//   socket.on('disconnect', function() {
//     onlineUsers--;
//     io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
//   });
// });

// server.listen(app.get('port'), function() {
//   console.log('Express server listening on port ' + app.get('port'));
// });


app.listen(app.get('port')); //the port you want to use