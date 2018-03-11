const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const routes = require('../routes');

module.exports = () => {
    const app = express();

    //app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    //app.use(bodyParser.text());
    //app.use(bodyParser.json({ type: "application/json" }));

    consign({ cwd: "app" })
        .include('infra')
        .then('models')        
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
    
};