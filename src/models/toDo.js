"use strict";
const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  complete: { type: Boolean, default: false },
  text: { type: String, required: true },
  difficulty: { type: Number, required: true },
  assignee: { type: String, required: true },
  dueDate: { type: Date },
});

const toDo = mongoose.model("toDo", toDoSchema);

module.exports = toDo;
