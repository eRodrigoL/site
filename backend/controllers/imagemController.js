const Imagem = require("../models/Imagem");

exports.create = async(req, res) => {
    try {
        //const {name} = req.body;

        const file = req.file;

        const imagem = new Imagem({
           // name,
            src: file.path
        });

        await imagem.save();

        res.json({
            imagem, msg: "Imagem salva com sucesso!"
        });

    } catch (error) {
        res.status(500).json({message: "Erro ao salvar a imagem."});
    }
};
