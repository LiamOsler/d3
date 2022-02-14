# d3.js Data Visualization
Visualization of Ipsos poll data using d3, implemented using NodeJS


## Setup:
In the ```site/``` directory, run the following command:

```bash
node server.js
```

A local server using ```express``` will run, visit [http://localhost:3000](http://localhost:3000) in your web browser.

## Setup from Git Instructions
Clone the repository from github:

```bash
git clone https://github.com/LiamOsler/d3
```

In the ```site/``` directory, install the required packaged with with npm:
```bash
npm install d3 jquery @popperjs/core bootstrap express
```

start the local web server with:

```bash
node server.js
```
Visit [http://localhost:3000](http://localhost:3000) in your web browser.

## Requirements:
- NodeJS

### Dependencies:
- D3: [https://github.com/d3/d3](https://github.com/d3/d3)
- Express: [https://github.com/expressjs/express](https://github.com/expressjs/express)
- jQuery
- Bootstrap
- Popper

HTML head:
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

Express Server:

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

Sources:
https://www.d3-graph-gallery.com/graph/line_cursor.html