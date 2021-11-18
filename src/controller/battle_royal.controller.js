const battleroyal = require('../models/battle_royal');

exports.listall = async (req, res) => {
    await battleroyal.find({}).then((battleroyal) => {
        res.status(200).json(battleroyal);
    }).catch((err) => {
        res.status(404).json({message:"SORRY, WE CAN NOT FIND WHAT YOUR ARE LOOKING FOR."});
        console.error(err);
    });
};

exports.listid = async (req,res) => {
    const id = req.params.id
    if(id.length != 24){
        res.status(400).json({message: "ERROR! WE NEED A 24 CHARACTER VALID ID!"});
        return true;
    }
    await battleroyal.findById(req.params.id).then((battleroyal) => {
        res.status(200).json(battleroyal);
    }).catch((err) => {
        res.status(404).json({message: "SORRY, WE CAN NOT FIND WHAT YOUR ARE LOOKING FOR."});
        console.error(err);
    });
}

exports.add = async (req,res) => { 

    if (!req.body.nome) {
        res.status(400).json({ message: 'NAME is missing!' });
        return;
    } else if (!req.body.lancamento) {
        res.status(400).json({ message: 'RELEASE DATE is missing!' });
        return;
    } else if (!req.body.genero) {
        res.status(400).json({ message: 'GENRE is missing!' });
        return; 
    } else if (!req.body.desenvolvedores) {
        res.status(400).json({ message: 'DEVELOPERS is missing!' });
        return;
    }else if (!req.body.imgurl) {
        res.status(400).json({ message: 'IMAGE URL is missing!' });
        return;
    }else if (!req.body.plataforma) {
        res.status(400).json({ message: 'PLATAFORM is missing!' });
        return;   
    }

    await battleroyal.create(req.body).then(() => {
        res.status(200).json({ message: 'BATTLE ROYAL CREATED SUCESSFULLY!' });
    }).catch((err) => {
        res.status(400).json({message: "SORRY WE COULDN`T REGISTER YOUR GAME."});
        console.error(err);
    });
};


exports.update = async (req,res) => {
    const id = req.params.id
    
    if (!req.body.nome) {
        res.status(400).json({ message: 'NAME is missing!' });
        return;
    } else if (!req.body.lancamento) {
        res.status(400).json({ message: 'RELEASE DATE is missing!' });
        return;
    } else if (!req.body.genero) {
        res.status(400).json({ message: 'GENRE is missing!' });
        return; 
    } else if (!req.body.desenvolvedores) {
        res.status(400).json({ message: 'DEVELOPERS is missing!' });
        return;
    }else if (!req.body.imgurl) {
        res.status(400).json({ message: 'IMAGE URL is missing!' });
        return;
    }else if (!req.body.plataforma) {
        res.status(400).json({ message: 'PLATAFORM is missing!' });
        return;   
    }

    await battleroyal.updateOne({_id:id},req.body).then(() => { //updateOne atualiza o primeiro que encontrar e der match
        res.status(200).json({message: "BATTLE ROYAL UPDATED!!"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "SORRY WE COULDN`T REGISTER YOUR GAME."});
    });
};

exports.delete = async (req,res) => {
    
    await battleroyal.deleteOne({_id:req.params.id}).then(() => { 
        res.status(200).json({message: "BATTLE ROYAL DELETED SUCESSFULLY!"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "SORRY WE COULDN`T DELETE YOUR GAME."});
    });

};