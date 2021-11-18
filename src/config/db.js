const mongoose = require('mongoose');


async function ConexaoDB(){
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_BASE}`,{ // string de conexao ou local ou atlas
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { 
        console.log("MongoDB is now LIVE!");
    }).catch((err) => { 
        console.error(err);
    });
}

module.exports = ConexaoDB;