'use strict';

require('envoodoo')()

var fs = require('fs')
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  fs.createReadStream(__dirname + '/geojson.json').pipe(res)
})

var port = process.env.PORT || 4000
console.log('app listening on port', port)
app.listen(port)
