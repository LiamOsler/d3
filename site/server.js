console.log('server is starting');

var express = require('express');

var app = express();
app.use('/bootstrap/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery/dist', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/popper/dist', express.static(__dirname + '/node_modules/jquery/dist'));


var server = app.listen(3000, listening);

function listening(){
    console.log("listening");
}
console.log("hello");

app.use(express.static('website'));