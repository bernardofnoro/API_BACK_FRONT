const express = require('express');
const router = express.Router();
const racing = require('../models/racing');
const racingController = require('../controller/racing.controller');

router.get('/', (req,res) => {
    res.status(200).json({message:'WELCOME TO THE RACING SECTION'});
});

router.get('/listall', racingController.listall);

router.get('/listid/:id', racingController.listid);

router.post('/add', racingController.add);

router.put('/update/:id', racingController.update);

router.delete('/delete/:id', racingController.delete);

module.exports = router