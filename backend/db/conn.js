const mongoose = require("mongoose")

async function main(){
    try{

        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://thaismferreira42:rHc142M1AWZ0VK1U@cluster0.mhidlx5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    } catch (error){
        console.log(`Erro: ${error}`);
    }

    //rHc142M1AWZ0VK1U
}

module.exports = main;

