/** start file */
"use strict";
var express = require('express');
var path = require('path');
var fs = require("fs");
var mime = require('mime');

// Creates a new express app
var app = express();

// All the file queries will execute this middleware
app.get('/*', function (req, res) {
    // Build the requested filepath
    var key =  decodeURI(req.originalUrl);
	// if the requested path is '/' app.html will be returned
    if (key === "/") 
        key = '/app.html';
    var filePath = path.join(__dirname, './../client' + key);
    var mimeType = mime.lookup(filePath);
    console.log(`requesting ${mimeType} file on ${filePath}`);

    fs.readFile(filePath, function (err, data) {
        if(err){
            if (err.code ==='ENOENT') {
                // Response for not found files
                console.error('Not Found: ' + err.path);
                res.status(404).send(err);
            } else {
                // Common error response
                logger.error(err);
                res.status(500).send(err);
            }
        }else{
            // Ok response
            res.set('content-type', mimeType);
                res.send(data);
            }
	});
});

// Listening port
app.listen(3000);