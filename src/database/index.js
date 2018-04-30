const mongoose = require('mongoose')  // pacote que o node usa para se conectar com o mongodb

mongoose.connect('mongodb://localhost/testa')

mongoose.Promise = global.Promise

module.exports = mongoose