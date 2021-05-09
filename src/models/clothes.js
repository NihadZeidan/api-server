'use strict';

const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    availability: { type: Boolean, required: true }
});


const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;