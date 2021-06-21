"use strict";
const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  complete: { type: Boolean, default: false },
  text: { type: String, required: true, default: "No Task Added !" },
  difficulty: { type: String, required: true, default: "50" },
  assignee: { type: String, required: true, default: "No Assignee Added !" },
  dueDate: { type: String },
});

const toDo = mongoose.model("toDo", toDoSchema);

module.exports = toDo;
