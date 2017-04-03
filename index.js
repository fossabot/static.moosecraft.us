var express     = require('express');
var path        = require('path');
var serveIndex  = require('serve-index');

var app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(serveIndex('/', {icons: true}));

var listener = app.listen(process.env.PORT || 3000, function() {
    console.log('App listening at http://localhost:' + listener.address().port);
});