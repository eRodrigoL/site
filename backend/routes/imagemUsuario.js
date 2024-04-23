const express = require("express");
const router = express.Router();

const upload = require("../config/multer");

const imagemController = require("../controllers/imagemController");

router.post("/imagensUsuario", upload.single("file"), imagemController.create);

module.exports = router;


