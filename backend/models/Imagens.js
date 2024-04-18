const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImagemSchema = new Schema({
    name:{type: String, required: true},
    src:{type: String, required: true}
});

module.exports = mongoose.model("Imagem", ImagemSchema);