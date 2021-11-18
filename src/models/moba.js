const mongoose = require('mongoose');

const mobaModel = new mongoose.Schema ({
    nome:{ type : String, required: true},
    lancamento: { type : Number , required : true},
    genero: { type : String , required : true},
    desenvolvedores: { type : String , required : true},
    imgurl: { type : String , required : true },
    plataforma : { type : String , required : true}
});

const gamemoba = mongoose.model("moba" , mobaModel);

module.exports = gamemoba;
