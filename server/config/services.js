module.exports = {
  service1: {
    getItemsAPI: '/items',
    postItemsAPI: '/items/:styleName',
    url: 'http://localhost:3001',
    bundle: 'bundle.js',
  },
  service2: {
    productsAPI: '/products/:productId',
    wishlistAPI: '/wishlist/:productId',
    url: 'http://localhost:3002',
    bundle: 'bundle.js',
  },
  service3: {
    API: '/productreviews',
    reviewsAPI: '/productreviews/reviews',
    url: 'http://localhost:3003',
    bundle: 'bundle.js',
  },
};
