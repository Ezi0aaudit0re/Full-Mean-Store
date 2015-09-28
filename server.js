var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/client')));
require('./server/config/mongoose.js')
require('./server/config/routes')(app);
app.listen(6789, function(){
	console.log('running');
})