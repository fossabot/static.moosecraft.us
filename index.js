var express     = require('express');
var spdy        = require('spdy');
var path        = require('path');
var fs          = require('fs');

var app = express();

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/static.moosecraft.us/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/static.moosecraft.us/cert.pem')
}

// let express serve static files
app.use(express.static(path.join(__dirname, 'public')));

var listener = app.listen(process.env.PORT || 3000, function() {
    console.log('App listening at http://localhost:' + listener.address().port);
});