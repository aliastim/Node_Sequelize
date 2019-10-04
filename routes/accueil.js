const express = require('express');
const router = express.Router();
const db = require('../config/db');
const users = require('../models/users');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get User list -------------------------------------------------------------
router.get('/', (req, res) =>
    users.findAll()
        .then(users => {
            res.render('users', {
                users
            });
        })
        .catch(err => console.log(err)));

// Affiche la vue "add" -------------------------------------------------------
router.get('/add', (req, res) => res.render('add'));


// Ajoute l'utilisateur entré dans le formulaire de la vue "add" --------------
router.post('/add', (req, res) => {

    let {name, firstname, email} = req.body; // On récupère le formulaire de la page add

    // Traitement des erreurs
    let errors = [];

    // Vérifie que les champs sont remplies
    if(!name) {
       errors.push({ text: "Ajoutez un nom"});
    }
    if(!firstname) {
        errors.push({ text: "Ajoutez un prénom"});
    }
    if(!email) {
        errors.push({ text: "Ajoutez un email"});
    }
    if(errors.length > 0) {

        res.render('add', {
            errors,
            name,
            firstname,
            email
        })

    } else {
        // Insert into table
        users.create({
            name, // doit correspondre avec l'attribut "name" du formulaire
            firstname, // doit correspondre avec l'attribut "name" du formulaire
            email // doit correspondre avec l'attribut "name" du formulaire
        })
            .then(user => res.redirect('/accueil'))
            .catch(err => console.log(err));
    }


});


// Recherche d'utilisateurs
router.get('/search', (req, res) => {
    let { term } = req.query;
    term = term.toLowerCase()

    users.findAll({
        where: {
            name: { [Op.like]: '%' + term + '%'}
        }
    })
    .then(users => res.render('users', { users }))
    .catch(err => console.log(err));
});

module.exports = router;