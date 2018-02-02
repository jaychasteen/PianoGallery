﻿var mongoose = require("mongoose");

var pianoSchema = new mongoose.Schema({
  title: String,
  make: String,
  model: String,
  year: Date,
  category: String,
  desc: String, // short description
  body: String, // full description
  l_price: Number,
  a_price: Number,
  yt_url: String, // URL to youtube video
  images: [String],
  main_image: String,
  date: { type: Date, default: Date.now }    // date posted, should default to NOW
});

module.exports = mongoose.model("Piano", pianoSchema);