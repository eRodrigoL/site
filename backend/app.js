const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())

app.use(express.json())

require("dotenv").config();


// video upload imagens

const port = process.env.PORT;

//const imagemRouter = require("./routes/imagem")

//app.use("/imagens", imagemRouter);

// DB Connection
const conn = require("./db/conn");

conn();

//Routes
const routes = require("./routes/router");

app.use("/api", routes);


app.listen(port, function(){
    console.log(`Servidor Online na porta ${port}`)
});



