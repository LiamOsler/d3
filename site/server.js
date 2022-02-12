console.log('server is starting');

var express = require('express');

var app = express();
app.use('/bootstrap/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery/', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/@popperjs/core/dist/umd', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use(express.static('public'));

var server = app.listen(3000, listening);

function listening(){
    console.log("listening");
}
