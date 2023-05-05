//Model, Schema
const express = require('express');

const mongoose = require("mongoose");

const { v4: uuidv4 } = require("uuid");
// Schema the shape of the data

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String,
  image: String
});

module.exports = mongoose.model('product', productSchema);