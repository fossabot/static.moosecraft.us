var express     = require('express');
var spdy        = require('spdy');
var path        = require('path');
var fs          = require('fs');

var app = express();

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/static.moosecraft.us/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/static.moosecraft.us/cert.pem')
}

app.use(express.static(path.join(__dirname, 'public')));

var listener = spdy.createServer(options, app).listen(process.env.PORT || 3000, (error) => {
    if (error) {
        console.error(error);
        return process.exit(1);
    } else {
        console.log('App listening at http://localhost:' + listener.address().port);
    }
});