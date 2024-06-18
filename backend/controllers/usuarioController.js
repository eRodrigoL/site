const  Usuarios = require("../models/Usuario");
const bcrypt = require('bcrypt');
const cloudinary = require("../config/cloudinaryConfig"); // importando a configuração do Cloudinary
const streamifier = require('streamifier');

const usuarioController={

    // função para criar usuário via POST
    create: async (req, res) => {
        try {

            // recebendo os parametros do body
            const { nome, apelido, nascimento, email, senha } = req.body;
            const file = req.file;

            // configurando hash de senha
            const salt = await bcrypt.genSalt(12);
            const hash = await bcrypt.hash(senha, salt);

            let src = "#";

            // Se o arquivo existir, faça o upload para o Cloudinary
            if (file) {
                const uploadStream = () => {
                    return new Promise((resolve, reject) => {
                        const stream = cloudinary.uploader.upload_stream(
                            { folder: 'site/usuarios' },
                            (error, result) => {
                                if (result) {
                                    resolve(result.secure_url);
                                } else {
                                    reject(error);
                                }
                            }
                        );
                        streamifier.createReadStream(file.buffer).pipe(stream);
                    });
                };

                src = await uploadStream();
            }

            // criando o usuario
            const usuario = new Usuarios({
                nome,
                apelido,
                nascimento,
                email,
                senha: hash,
                src
            });

            // validando se usuário e apelido existem
            const usuarioExiste = await Usuarios.findOne({ email: email });
            const apelidoExiste = await Usuarios.findOne({ apelido: apelido });

            if (usuarioExiste) {
                res.status(401).json({ message: "O email inserido está em uso, por gentileza utilize outro" });
                return;
            }

            if (apelidoExiste) {
                res.status(401).json({ message: "O apelido inserido já está em uso, por gentileza utilize outro" });
                return;
            }

            // Salvando o usuário
            await usuario.save();
            res.status(201).json({ usuario, message: "Usuário criado com sucesso!" });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Erro ao processar a requisição." });
        }
    },

    // função para buscar todos os usuários da lista via GET
    getAll: async (req, res) => {
        try{
            const usuarios = await Usuarios.find()

            res.json(usuarios);
        }catch(error){
            console.log(error)
        }
    },

    // função para buscar apenas um usuário passando o ID via GET
    get: async(req,res) =>{
        try {
            //id => URL == GET
            const id = req.params.id
            const usuario = await Usuarios.findById(id);

            if(!usuario){
                res.status(404).json({msg: "Usuario não encontrado"});
                return;
            }

            res.json(usuario);

        }catch(error) {
            console.log(error)
        }
    },

    // função para deletar o usuário passando ID via DELETE
    delete: async(req,res) => {
        try{
            const id = req.params.id;

            const usuario = await Usuarios.findById(id);

            if (!usuario){
                res.status(404).json({ msg: "Usuário não encontrado!"});
                return;
            }

        const deletedUsuario = await Usuarios.findByIdAndDelete(id);

        res
            .status(200)
            .json({ deletedUsuario, msg: "Usuário excluido com sucesso"});

        }catch (error){
            console.log(error)
        }
    },
    
    // atualizando o usuário passando o ID via PUT
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const file = req.file;

            let src = null;

            // Se o arquivo existir, faça o upload para o Cloudinary
            if (file) {
                const uploadResponse = await new Promise((resolve, reject) => {
                    const uploadStream = cloudinary.uploader.upload_stream(
                        { 
                            folder: 'site/usuarios', // Specify the folder here
                            resource_type: "image" 
                        },
                        (error, result) => {
                            if (error) reject(error);
                            resolve(result.secure_url);
                        }
                    );
                    streamifier.createReadStream(file.buffer).pipe(uploadStream);
                });

                src = uploadResponse;
            }

            const usuario = {
                src: src || undefined
            };

            const updatedUsuario = await Usuarios.findByIdAndUpdate(id, usuario);

            if (!updatedUsuario) {
                res.status(404).json({ msg: "Usuário não encontrado." });
                return;
            }

            res.status(200).json({ usuario, msg: "Foto atualizada com sucesso." });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Erro ao processar a requisição." });
        }
    }
};

module.exports = usuarioController; 