const  Usuarios = require("../models/Usuario");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config()

const JWT_SECRET = process.env.SECRET ;

const loginController={

    // enviando as informações do formulário e validando-as

    post: async(req, res) =>{

        const apelido = req.body.apelido;
        const senha = req.body.senha;
    
            // conferindo se o email e a senha estão preenchidos
            if (!apelido || !senha) {
                return res.status(422).json({msg: 'Por favor, insira o apelido e a senha!'});
            }
    
            // conferindo se o usuário existe
     
            const apelidoExiste = await Usuarios.findOne({apelido: apelido});
    
            if(!apelidoExiste){
               return res.status(404).json({msg: 'O apelido inserido não existe, por favor insira outro!'});
            }

             // conferindo se a senha bate
    
             const confereSenha = await bcrypt.compare(senha, apelidoExiste.senha);
    
             if(!confereSenha){
                return res.status(422).json({msg:'Senha inválida'});
             }
            
            const usuario = await Usuarios.findOne({apelido: apelido}).select('-senha');

            // Gerando o token JWT
            const token = jwt.sign(
                {
                    id: usuario._id, apelido: usuario.apelido
                }, // Payload do token

                JWT_SECRET, // Chave secreta para assinar o token
            { expiresIn: '2h' } // Tempo de expiração do token
        );

            res.status(200).json({usuario, token, msg:"Usuário logado com sucesso!"});      
    }
};

module.exports = loginController;
