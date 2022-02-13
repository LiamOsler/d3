# d3.js Data Visualization
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

### server.js:
```javascript 
console.log('server is starting');

var express = require('express');

var app = express();
app.use('/jquery/', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/@popperjs/', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use('/bootstrap/', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap/', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/d3/js/', express.static(__dirname + '/node_modules/d3/dist'));
app.use(express.static('public'));

var server = app.listen(3000, listening);

function listening(){
    console.log("listening");
}
```

### index.html:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/bootstrap/bootstrap.min.css">

    <title>Visualization Project</title>
  </head>
  <body>
    
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS and d3 -->
    <script src="/jquery/jquery.min.js"></script>
    <script src="/@popperjs/popper.min.js" ></script>
    <script src="/bootstrap/bootstrap.min.js" ></script>
    <script src="/d3/js/d3.js" ></script>
  </body>
</html>
```

