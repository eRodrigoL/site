const mongoose = require("mongoose");
const { imagemSchema } = require("./Imagem");

const { Schema } = mongoose;

const usuarioSchema = new Schema({

    nome: {
        type: String,
       // required: true
    },
    apelido: {
        type: String,
        //required: true
    },
    nascimento: {
        type: Date,
    },
    email: {
        type: String,
        //required: true
    },
    senha: {
        type: String,
        //required: true
    },
    confirmacao: {
        type: String,
        //required: true
    },
    /*foto: {
        type: String,
    },*/
    imagem: {
        type: [imagemSchema], 
    }
},
{timestamps: true} //salva a data de criação e de modificação desse registro
);

const Usuario = mongoose.model("Usuario", usuarioSchema)

module.exports = {
    Usuario,
    usuarioSchema
}