const api = require('../controllers/products');

module.exports = (app) => {
    
    app.route('/products')
        .get(api.get)
        .post(api.post);

    app.route('/products/:slug')
        .get(api.getBySlug);

    app.route('/products/tags/:tag')
        .get(api.getByTag);

    app.route('/products/admin/:id')
        .delete(api.delete)
        .get(api.getById)
        .put(api.put);
};