const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    dishType: String,
    name: String,
    ingredients: Array,
    steps: Array
});

module.exports = mongoose.model('Recipe', recipeSchema);