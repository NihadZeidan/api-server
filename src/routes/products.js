"use strict";

const productModel = require("../models/products.js");

const Collection = require("../models/data-collection-class.js");

const newProduct = new Collection(productModel);

const express = require("express");

const router = express.Router();

router.post("/product", async (req, res) => {
  let obj = req.body;

  let createNew = await newProduct.create(obj);
  res.status(201).json(createNew);
});

router.get("/product", async (req, res) => {
  let readAll = await newProduct.get();
  readAll.sort((a, b) => {
    a["createdAt"] - b["createdAt"];
  });
  res.status(200).json(readAll);
});

router.get("/product/:id", async (req, res) => {
  let id = req.params.id;

  let getOneItem = await newProduct.get(id);

  res.status(200).json(getOneItem);
});

router.put("/product/:id", async (req, res) => {
  let id = req.params.id;

  let obj = req.body;

  let toUpdate = await newProduct.update(id, obj);

  res.status(200).json(toUpdate);
});

router.delete("/product/:id", async (req, res) => {
  let id = req.params.id;
  let deleted = await newProduct.delete(id);

  res.status(202).json(deleted);
});

module.exports = router;
