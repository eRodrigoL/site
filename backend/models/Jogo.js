const mongoose = require("mongoose");

const { Schema } = mongoose;

const jogoSchema = new Schema({

    titulo: {
        type: String,
        required: true
    },
    editora: {
        type: String,
    },
    alteravel: {
        type: Boolean,
    },
    descricao: {
        type: String,
    },
    categoria: {
        type: String,
    }
    
},
{timestamps: true} //salva a data de criação e de modificação desse registro
);

const Jogo = mongoose.model("Jogo", jogoSchema)

module.exports = {
    Jogo,
    jogoSchema
}