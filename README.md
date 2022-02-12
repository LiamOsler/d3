# d3
Visualization of Ipsos poll data

## Getting started:

With the npm package manger:
```bash
npm install d3
```

https://github.com/d3/d3

Setting up a basic web server:

```javascript 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

https://nodejs.org/en/docs/guides/getting-started-guide/