const { json } = require("express");
const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Match.find(req.query)
      .then((dbMatch) => res.json(dbMatch))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Match.create(req.body)
      .then((dbMatch) => {
        db.Player.findOneAndUpdate(
          { _id: dbMatch.winner },
          { $push: { wins: dbMatch._id } }
        )
          .then((res) => console.log("findOneAndUpdate", res))
          .catch((err) => console.log("wrong update", err));
        db.Player.findOneAndUpdate(
          { _id: dbMatch.loser },
          { $push: { losses: dbMatch._id } }
        )
          .then((res) => console.log("findOneAndUpdate", res))
          .catch((err) => console.log("wrong update", err));
        console.log("create dbMatch", dbMatch);
        res.json(dbMatch);
      })
      .catch((err) => res.json(err));
  },
};
