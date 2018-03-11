const mongoose = require('mongoose');

//const db = 'mongodb://localhost/cozinhaapp';

module.exports = (db) => {
    mongoose.connect('mongodb://localhost/cozinhaapp',  { useMongoClient: true });

    mongoose.Promise = global.Promise;

    mongoose.connection.on('connected', function () {
        console.log('connection successful');
    });

    // If the connection throws an error
    mongoose.connection.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
    });
    return db;
    
};