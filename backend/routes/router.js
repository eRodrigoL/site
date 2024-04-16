const router = require("express").Router()

// Usuarios router

const usuariosRouter = require("./usuarios");

router.use("/", usuariosRouter);


// Jogos routes

const jogosRouter = require("./jogos");

router.use("/", jogosRouter);

// Atividades routes

const atividadesRouter = require("./atividades");

router.use("/", atividadesRouter);

// Avaliacoes Router

const avaliacoesRouter = require("./avaliacoes");

router.use("/", avaliacoesRouter);

module.exports = router;


