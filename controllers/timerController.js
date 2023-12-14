const Timer = require('../models/timerModel');

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