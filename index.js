var compression = require('compression');
var express     = require('express');
var path        = require('path');

var app = express();

// add monitoring middleware
app.use(require('express-status-monitor')());

// add gzip compression to all assets
//app.use(compression);

// let express serve static files
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 errors to output them into the console log
app.use(function (req, res, next) {
    console.log("Requested URL: " + req.url + " Status: 404");
    res.status(404).send('Unable to get the resource requested');
})

var listener = app.listen(process.env.PORT || 3000, function() {
    console.log('App listening at http://localhost:' + listener.address().port);
});