#!/usr/bin/env node

var connect = require('connect');
connect.createServer(
    connect.static(__dirname + '/../public')
).listen(process.env.PORT || 8000);
