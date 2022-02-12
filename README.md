# d3
Visualization of Ipsos poll data using d3, implemented using NodeJS

## Demo:
in the site/ folder, run the following command:
```bash
node server.js
```
And visit [http://localhost:3000](http://localhost:3000) in your web browser.

## Installation and Setup Instructions
Install the required packaged with With the npm package manger:
```bash
npm install d3 jquery @popperjs/core bootstrap express
```

https://github.com/d3/d3

Setting up a basic web server with express, and loading the required scripts from a local copy retrieved with node js:

```javascript 
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
    console.log(listening);
}

```

