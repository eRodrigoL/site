const {Jogo : JogoModel, Jogo } = require("../models/Jogo");

const jogoController = {

    create: async(req, res) =>{
        try {
            const jogo = {
                titulo: req.body.titulo,
                editora: req.body.editora,
                alteravel: req.body.alteravel,
                descricao: req.body.descricao,
                categoria: req.body.categoria,
            };
            const response = await JogoModel.create(jogo);

            res.status(201).json({response, msg: "Jogo criado com sucesso!"});

        } catch(error){
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try{
            const jogos = await JogoModel.find()

            res.json(jogos);
        }catch(error){
            console.log(error)
        }
    },
    get: async(req,res) =>{
        try {
            //id => URL == GET
            const id = req.params.id
            const jogo = await JogoModel.findById(id);

            if(!jogo){
                res.status(404).json({msg: "Jogo não encontrado!"});
                return;
            }

            res.json(jogo);

        }catch(error) {
            console.log(error)
        }
    },
    delete: async(req,res) => {
        try{
            const id = req.params.id;

            const jogo = await JogoModel.findById(id);

            if (!jogo){
                res.status(404).json({ msg: "Jogo não encontrado!"});
                return;
            }

        const deletedJogo = await JogoModel.findByIdAndDelete(id);

        res
            .status(200)
            .json({ deletedJogo, msg: "Jogo excluido com sucesso!"});

        }catch (error){
            console.log(error)
        }
    },
    update : async(req,res) =>{
        const id = req.params.id

        const jogo = {
            titulo: req.body.titulo,
            editora: req.body.editora,
            alteravel: req.body.alteravel,
            descricao: req.body.descricao,
            categoria: req.body.categoria
        };

        const updatedJogo = await JogoModel.findByIdAndUpdate(id, jogo)

        if(!updatedJogo) {
            res.status(404).json({msg: "Jogo não encontrado!"});
            return;
        }

        res.status(200).json({jogo, msg: "Jogo atualizado com sucesso!"}); 

        },

    };


module.exports = jogoController;