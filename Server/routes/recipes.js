const Recipe = require('../models/recipe');
const express = require('express');
const router = express.Router();
const credentials = require('../credentials');

router.route('/recipes').get((req, res) => {
    Recipe.find((err, recipes) => {
        if (err) {
            return res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(recipes);
    });
});

router.route('/recipes').post((req, res) => {
    var recipe = new Recipe(req.body);
    if (req.body.password === credentials.adminPassword) {
        recipe.save((err) => {
        if (err) {
            return res.send(err);
        }

        res.send({message: 'Recipe added!'});
    });
    } else {
        res.send({message: 'wrong password'});
    }
});

module.exports = router;