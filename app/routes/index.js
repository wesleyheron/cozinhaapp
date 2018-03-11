//const cursos = require('./cursos');

module.exports = (app) => {
    app
        .get('/', (req, res, next) => {
            res.status(200).send({
                title: "API Store Portal Learning",
                version: "0.0.1"
            });
        });
};