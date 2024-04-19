const Imagem = require("../models/Imagem");
const Usuario = require("../models/Usuario");

exports.create = async(req, res) => {
    try {
        //const {name} = req.body;

        const file = req.file;

        const usuarioImg = new Usuario({
            // name,
             imagem: {src: file.path}
         });
        
         await usuarioImg.save();

        res.json({
            imagem, msg: "Imagem salva com sucesso!"
        });

    } catch (error) {
        res.status(500).json({message: "Erro ao salvar a imagem na rota de usuarios."});
    }
};

