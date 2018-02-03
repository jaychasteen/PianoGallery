﻿var Piano = require("./models/piano");
var moment = require("moment");
var error = require("./error.js");

var utils = {
  spaceToUnderscore: function (string) {
    return string.replace(/ /g, "_");
  },

  pianoFromRequest: function (req) {
    // Parameter rb = request.body
    // Returns an object of type: Mongoose Schema
    var rb = req.body;
    var newPiano = {
      title: rb.title, make: rb.make,
      model: rb.model, year: rb.year,
      desc: rb.desc, body: rb.body,
      l_price: rb.l_price, a_price: rb.a_price,
      yt_url: rb.yt_url
    };
    return newPiano;
  },

  Host: function (ip) {
    if (ip === '127.0.0.1') return "localhost";
    else return ip;
  },

  updateThenAddImg: function (req, res, id) {
    Piano.findByIdAndUpdate(id, this.pianoFromRequest(req),function (err, foundPiano) {
      if (err) err.Utils("sendToAddImg", "Piano.findByIdAndUpdate", err);
      else {
        res.redirect("/gallery/" + foundPiano._id + "/addimg");
      }
    });    
  }
}

module.exports = utils;