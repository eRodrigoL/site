const router = require("express").Router();

const upload = require("../config/multer");

const ImagemController = require("../controllers/imagemController");

router.post("/imagens", upload.single("file"), ImagemController.create);

//router.route("/imagens").post("/imagens", upload.single("file"), ImagemController.create);

// Funções

module.exports = router;


