const mongoose = require('../database')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

// para encriptografar a senha
UserSchema.pre('save', async function(next){ // o pre do mongodb antes de salvar ele faz uma coisa
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next() // acho que é um middleware
})

const User = mongoose.model('User', UserSchema) //nome do model e seu schema (definindo o model)

module.exports = User