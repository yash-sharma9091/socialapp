'use strict';
/*
* All the required node packages
*/
const express 	= require('express'),
	app 		= express(),
	path 		= require('path'),
	morgan 		= require('morgan'),
	helmet 		= require('helmet'),
	compress 	= require('compression'),
	http 		= require('http').Server(app),
	PORT 		= process.env.PORT || 8080;

console.log(process.env.NODE_ENV);
/* Node.js compression middleware
* The middleware will attempt to compress response bodies for all request that traverse through the middleware
* Should be placed before express.static
*/
app.use(compress({
    filter: function (req, res) {
      return (/json|text|javascript|css|font|svg/).test(res.getHeader('Content-Type'));
    },
    level: 9
}));

/*
* Serving static files in Express using express static middleware
* these files will be access publicly
*/

app.use(express.static(path.resolve('./build')));	
app.use(morgan('dev'));

/**
* Configure Helmet headers configuration
* Use helmet to secure Express headers
*/
app.use(helmet());

/* Register all your routes */

app.get('*', (req, res) => res.sendFile(path.resolve('./build/index.html'), (err) => console.log(err)) );

/*
* Start the node server using node 'http' package
*/
http.listen(PORT, () => console.log(`Listening on server port:${PORT}`));