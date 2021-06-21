'use strict';
const express = require('express');
const router = express.Router();


const ToDoSchema = require('../models/toDo.js');
const Collection = require('../models/data-collection-class');

let newToDo = new Collection(ToDoSchema);


const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;



router.post('/todo', async(req, res) => {

    let obj = req.body;
    let createNew = await newToDo.create(obj);
    res.status(201).json(createNew);
});




router.get('/todo', async(req, res) => {

    let readAll = await newToDo.get();

    res.status(200).json(readAll);

});





router.get('/todo/:id', async(req, res) => {
    let id = req.params.id;

    let getOneItem = await newToDo.get(id);

    res.status(200).json(getOneItem);
});




router.put('/todo/:id', async(req, res) => {
    let id = req.params.id;

    let obj = req.body;

    let toUpdate = await newToDo.update(id, obj);

    res.status(200).json(toUpdate);
});



router.delete('/todo/:id', async(req, res) => {

    let id = req.params.id;
    let deleted = await newToDo.delete(id);

    res.status(202).json(deleted);
});


module.exports = router;