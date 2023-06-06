const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    name: String
});

const Business = mongoose.model('business',businessSchema);

module.exports = Business