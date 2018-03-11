const api = require('../controllers/customer');

module.exports = (app) => {
    
    app.route('/customers')
        .post(api.post);
            
};