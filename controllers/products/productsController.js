const {findAll, findAllCategory, findById} = require('../../models/products/productsModel');


async function getProducts(res) {
  res.writeHead(200, {"Content-Type" : "application/json"});
  const responseData = await findAll();
  res.write(JSON.stringify(responseData));
  res.end();
}

async function getCategoryProducts(req, res) {
  const category = req.url.split('/')[4];
  const responseData = await findAllCategory(category);

  if (responseData.length > 0) {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(responseData));
    res.end();
  }
   else {
    res.writeHead(404, {"Content-Type": "application/json"});
    res.write(JSON.stringify({message: `Category: ${category} not found!`}));
    res.end();
  }

  res.end();
}

async function getProduct(req, res) {
  const category = req.url.split('/')[4];
  const id = parseInt(req.url.split('/')[5]);

  const responseData = await findById(category, id);

  if (responseData) {
    res.writeHead(200, {"Content-Type" : "application/json"});
    res.write(JSON.stringify(responseData));
    res.end();
  }
  else {
    res.writeHead(404, {"Content-Type" : "application/json"});
    res.write(JSON.stringify({message: "Item not found"}));
    res.end();
  }

}

module.exports = {
  getProducts: getProducts,
  getCategoryProducts: getCategoryProducts,
  getProduct: getProduct
};
