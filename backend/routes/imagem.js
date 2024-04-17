const express = require("express");
const router = express.Router();

const upload = require("../config/multer");

const ImagemController = require("../controllers/imagemController");

router.post("/", upload.single("file"), ImagemController.create);

module.exports = router;


