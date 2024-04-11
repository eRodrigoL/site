const mongoose = require("mongoose");

const { Schema } = mongoose;

const usuarioSchema = new Schema({

    cpf: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    administrador: {
        type: Boolean,
    },
    apelido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    nascimento: {
        type: Date,
    },
    foto: {
        type: String,
    },
},
{timestamps: true} //salva a data de criação e de modificação desse registro
);

const Usuario = mongoose.model("Usuario", usuarioSchema)

module.exports = {
    Usuario,
    usuarioSchema
}