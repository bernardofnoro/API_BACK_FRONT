const express = require('express');
const router = express.Router();
const moba = require('../models/moba');
const mobaController = require('../controller/moba.controller');

router.get('/', (req,res) => {
    res.status(200).json({message:'WELCOME TO THE MOBA SECTION'});
});

router.get('/listall', mobaController.listall);

router.get('/listid/:id', mobaController.listid);

router.post('/add', mobaController.add);

router.put('/update/:id', mobaController.update);

router.delete('/delete/:id', mobaController.delete);

module.exports = router
