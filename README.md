# d3.js Data Visualization
Visualization of Ipsos poll data using d3, implemented using NodeJS

## Demo:
in the site/ directory, run the following command:

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
app.use('/d3/', express.static(__dirname + '/node_modules/d3/dist'));
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
    <script src="/d3/d3.js" ></script>
  </body>
</html>
```

Creating cards:

```html
  <div class = "col-12 col-lg-6">
    <div class="card">
      <div class="card-body">
        <div class = "row">
          <div class = "col-3">
            <h5 class="card-title">PLANNING NHS RESPONSE</h5>
            <p class="card-text">Confidence in the NHS is at its highest since June 2020</p>
          </div>
          <div class = "col-9">
            <div id= "chart"></div>
          </div>
        </div>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
```


Sources:

https://www.d3-graph-gallery.com/graph/line_cursor.html