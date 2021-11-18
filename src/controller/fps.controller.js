const fps = require('../models/fps');


exports.listall = async (req, res) => {
    await fps.find({}).then((fps) => {
        res.status(200).json(fps);
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
    await fps.findById(req.params.id).then((fps) => {
        res.status(200).json(fps);
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

    await fps.create(req.body).then(() => {
        res.status(200).json({ message: 'FPS GAME CREATED SUCESSFULLY!' });
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

    await fps.updateOne({_id:id},req.body).then(() => { 
        res.status(200).json({message: "FPS GAME UPDATED!!"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "SORRY WE COULDN`T REGISTER YOUR GAME."});
    });
};

exports.delete = async (req,res) => {
    
    await fps.deleteOne({_id:req.params.id}).then(() => { 
        res.status(200).json({message: "FPS GAME DELETED SUCESSFULLY!"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "SORRY WE COULDN`T DELETE YOUR GAME."});
    });

};