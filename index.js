const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(express.json());

const ConexaoDB = require('./src/config/db');

app.use(cors());
app.options('*',cors);

ConexaoDB();

app.get('/' , (req,res) => {
    res.status(200).json('GAMES API IS LIVE!');
})


const fpsrouter = require('./src/routers/fps.routes');
app.use('/fps' , fpsrouter);

const rpgrouter = require('./src/routers/rpg.routes');
app.use('/rpg' , rpgrouter);

const mobarouter = require('./src/routers/moba.routes');
app.use('/moba' , mobarouter);

const battleroyalrouter = require('./src/routers/battle_royal.routes');
app.use('/battleroyal', battleroyalrouter);

const racingrouter = require('./src/routers/racing.routes');
app.use('/racing', racingrouter);

app.listen(process.env.PORT, () =>{
    console.log(`Server live on http://localhost:${process.env.PORT}`);
});

