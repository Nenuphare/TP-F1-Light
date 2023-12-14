const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.userRegister = async (req, res) => {
    try {
        let newUser = new User(req.body);
        let user = await newUser.save();
        res.status(201).json({ message: `User créé: ${user.email}` });        
    } 
    catch (error) {
        console.log(error);
        res.status(401).json({message: 'Requete invalide'});
    }
};

exports.userLogin = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) {
            res.status(500).json({message: 'Utilisateur non trouvé'});
            return;
        }
        if(user.email == req.body.email && user.password == req.body.password) {
            let userData = {
                id: user._id,
                email: user.email,
                role: 'admin'
            };
            const token = await jwt.sign(userData, process.env.JWT_KEY, {expiresIn: "10h"});
            res.status(200).json({token});
            }
        else {
            res.status(401).json({message: "Email ou mot de passe incorrect."});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Une erreur s'est produite lors du traitement."})
    }
};

exports.userDelete = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id_user);
        res.status(200).json({message: "User deleted"});
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur while deleting user'});
    }
    
};

exports.userUpdate = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id_user, req.body, {new: true});
        res.status(200).json({message: "User updated"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "error updating user"});
    }
}

exports.userGet = async (req, res) => {
    try {
        const user = await User.findById(req.params.id_user);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error while retrieving user"});
    }
}