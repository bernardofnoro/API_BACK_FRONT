const express = require('express');
const router = express.Router();
const battleroyal = require('../models/battle_royal');
const battleroyalController = require('../controller/battle_royal.controller');


router.get('/' , (req,res) => {
    res.status(200).json({message:'WELCOME TO THE BATTLE ROYAL SECTION'});
});

router.get('/listall', battleroyalController.listall);

router.get('/listid/:id',battleroyalController.listid);

router.post('/add', battleroyalController.add);

router.put('/update/:id', battleroyalController.update);

router.delete('/delete/:id', battleroyalController.delete);

module.exports = router;
