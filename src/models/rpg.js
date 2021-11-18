const mongoose = require('mongoose');

const rpgModel = new mongoose.Schema ({
    nome:{ type : String, required: true},
    lancamento: { type : Number , required : true},
    genero: { type : String , required : true},
    desenvolvedores: { type : String , required : true},
    imgurl: { type : String , required : true },
    plataforma : { type : String , required : true}
});

const gamerpg = mongoose.model("rpg" , rpgModel);

module.exports = gamerpg;