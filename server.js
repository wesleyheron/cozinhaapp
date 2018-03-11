const config = require('./app/config/server-config')();
const app = require('./app/config/app')();


app.listen(config.port, () => {
    console.log('Servidor rodando na porta ' + config.port);
});
