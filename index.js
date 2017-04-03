var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

var listener = app.listen(process.env.PORT || 3000, function() {
    console.log('App listening at http://localhost:' + listener.address().port);
});