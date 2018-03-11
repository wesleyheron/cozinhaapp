const repository = require('../repositories/customer');
const bcrypt = require('bcryptjs');

exports.post = async (req, res, next) => {
    
    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        });
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!'+
            console.log(e.message)
        });
    }

};