const express = require('express');
const router = express.Router();
const fps = require('../models/fps');
const fpsController = require('../controller/fps.controller');

router.get('/', (req,res) =>{
    res.status(200).json({message:'WELCOME TO THE FPS SECTION'});
});

router.get('/listall', fpsController.listall);

router.get('/listid/:id', fpsController.listid);

router.post('/add', fpsController.add);

router.put('/update/:id', fpsController.update);

router.delete('/delete/:id', fpsController.delete);




module.exports = router