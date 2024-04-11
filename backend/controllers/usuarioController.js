const {Usuario : UsuarioModel, Usuario } = require("../models/Usuario");

const usuarioController = {

    create: async(req, res) =>{
        try {
            const usuario = {
                cpf: req.body.cpf,
                nome: req.body.nome,
                administrador: req.body.administrador,
                apelido: req.body.apelido,
                email: req.body.email,
                senha: req.body.senha,
                nascimento: req.body.nascimento,
                foto: req.body.foto
            };
            const response = await UsuarioModel.create(usuario);

            res.status(201).json({response, msg: "Usuário cadastrado com sucesso!"});

        } catch(error){
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try{
            const usuarios = await UsuarioModel.find()

            res.json(usuarios);
        }catch(error){
            console.log(error)
        }
    },
    get: async(req,res) =>{
        try {
            //id => URL == GET
            const id = req.params.id
            const usuario = await UsuarioModel.findById(id);

            if(!usuario){
                res.status(404).json({msg: "Usuario não encontrado"});
                return;
            }

            res.json(usuario);

        }catch(error) {
            console.log(error)
        }
    },
    delete: async(req,res) => {
        try{
            const id = req.params.id;

            const usuario = await UsuarioModel.findById(id);

            if (!usuario){
                res.status(404).json({ msg: "Usuário não encontrado!"});
                return;
            }

        const deletedUsuario = await UsuarioModel.findByIdAndDelete(id);

        res
            .status(200)
            .json({ deletedUsuario, msg: "Usuário excluido com sucesso"});

        }catch (error){
            console.log(error)
        }
    },
    update : async(req,res) =>{
        const id = req.params.id

        const usuario = {
            cpf: req.body.cpf,
            nome: req.body.nome,
            administrador: req.body.administrador,
            apelido: req.body.apelido,
            email: req.body.email,
            senha: req.body.senha,
            nascimento: req.body.nascimento,
            foto: req.body.foto
        };

        const updatedUsuario = await UsuarioModel.findByIdAndUpdate(id, usuario)

        if(!updatedUsuario) {
            res.status(404).json({msg: "Usuário não encontrado."});
            return;
        }

        res.status(200).json({usuario, msg: "Usuário atualizado com sucesso."}); 

        },

    };


module.exports = usuarioController;