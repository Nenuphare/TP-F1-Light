const Timer = require('../models/timerModel');
const User = require('../models/userModel');

// methode pour avoir tous les temps d'un utilisateur
exports.getAllTimerUser = async (req, res) => {
    try {
        const allTimer = await Timer.find({user_id: req.params.id_user});
        if (allTimer.length == 0) {
            res.status(500).json({message: 'Aucun temps trouvé.'});
        } else {
            res.status(200).json(allTimer);
        }
    } catch (error) {
        res.status(500).json({message: 'Utilisateur non trouvé.'});
    }
};

exports.createAUser = async (req, res) => {
    try {
        await User.findById(req.params.id_user);
        const newTimer = new Timer({...req.body, user_id: req.params.id_user});
    
        try {
            const timer = await newComment.save();
            res.status(201);
            res.json(timer);
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: 'Erreur serveur while creating data(db)'});
        }
    } catch (error) {
        console.log(error);
        res.json({message: 'Erreur serveur while creating data(post inexistant)'});
    }
}