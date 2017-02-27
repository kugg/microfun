var express = require('express'),
    wine = require('./routes/wines');

var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
app.use(bodyParser.json());

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);

app.listen(8080);
console.log('Listening on port 8080...');
