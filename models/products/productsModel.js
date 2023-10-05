const products = require('../../data/data');

const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(products);
  })
};

const findAllCategory = (category) => {
  return new Promise((resolve, reject) => {
    const data = products.products[category] || [];
    resolve(data);

  })
}

const findById = (category, id) => {
  return new Promise((resolve, reject) => {
    const data = products.products[category].find(item => item.id === id);
    resolve(data)
  });
}

module.exports = {
  findAll: findAll,
  findAllCategory: findAllCategory,
  findById: findById
};
