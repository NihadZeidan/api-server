'use strict';

const mongoose = require('mongoose');



const foodSchema = mongoose.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    availability: { type: Boolean, required: true }

});

const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;