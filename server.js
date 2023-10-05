const http = require('http');
const {getProducts, getCategoryProducts, getProduct} = require('./controllers/products/productsController')

const server  = http.createServer((req, res) => {
  if (req.url === '/api/v1/products' && req.method === 'GET') {
    getProducts(res);
  }

  else if( req.url.match(/^\/api\/v1\/products\/([^\/]+)$/) && req.method === 'GET') {
    getCategoryProducts(req, res);
  }

  else if (req.url.match(/^\/api\/v1\/products\/([^\/]+)\/(\d+)$/) && req.method === 'GET') {
    getProduct(req, res);
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
