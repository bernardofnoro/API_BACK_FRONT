const express = require('express');
const router = express.Router();
const rpg = require('../models/rpg');
const rpgController = require('../controller/rpg.controller');

router.get('/' , (req,res) => {
    res.status(200).json({message:'WELCOME TO THE RPG SECTION'});
});

router.get('/listall', rpgController.listall);

router.get('/listid/:id', rpgController.listid);

router.post('/add', rpgController.add);

router.put('/update/:id', rpgController.update);

router.delete('/delete/:id', rpgController.delete);




module.exports = router

