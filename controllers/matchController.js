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
        res.json(dbMatch);
      })
      .catch((err) => res.json(err));
  },

  update: function (req, res) {
    db.Match.findOne({ _id: req.params.id })
      .then((dbMatch) => {
        db.Match.updateOne({ _id: req.params.id }, { $set: { isAdmin: true } })
          .then(async (res) => {
            console.log("res", res)
            await db.Player.updateOne(
              { _id: dbMatch.winner },
              { $push: { wins: dbMatch._id } }
            )
              .then(res => console.log(res))
              .catch(err => console.log("wrong update", err));

            await db.Player.updateOne(
              { _id: dbMatch.loser },
              { $push: { losses: dbMatch._id } }
            )
              .then(res => console.log(res))
              .catch(err => console.log("wrong update", err));
          })
          .catch((err) => console.log("wrong update", err));
      })
      .then(res => res.json(res))
      .catch((err) => res.json(err));
  },
};
