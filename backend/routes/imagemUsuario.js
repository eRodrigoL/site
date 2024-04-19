const express = require("express");
const router = express.Router();

const upload = require("../config/multer");

const imagemUsuarioController = require("../controllers/imagemController");

router.post("/imagensUsuario", upload.single("file"), imagemUsuarioController.create);

module.exports = router;


