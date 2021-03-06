"use strict";
var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();
app.use('/app', express.static(path.resolve(__dirname, '../client/app/')));
app.use('/libs', express.static(path.resolve(__dirname, '../libs/')));
var renderIndex = function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
};
app.get('/*', renderIndex);
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port: ' + port);
});
