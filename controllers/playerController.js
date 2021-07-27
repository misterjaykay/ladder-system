const { json } = require("express");
const db = require("../models");
const Elorank = require("elo-rank");
const elo = new Elorank(40);

module.exports = {
  findAll: function (req, res) {
    db.Player.find({})
      .then((dbPlayer) => {
        res.json(dbPlayer);
      })
      .catch((err) => res.status(422).json(err));
  },

  updateElo: function (req, res) {
    db.Match.findOne({ _id: req.params.id })
      .then(async (data) => {
        var winElo;
        var losElo;

        await db.Player.findOne({ _id: data.winner })
          .then((res) => {
            winElo = res.ratings;
          })
          .catch((err) => console.log(err));

        await db.Player.findOne({ _id: data.loser })
          .then((res) => {
            losElo = res.ratings;
          })
          .catch((err) => console.log(err));

        //Gets expected score for first parameter
        var expectedScoreA = await elo.getExpected(winElo, losElo);
        var expectedScoreB = await elo.getExpected(losElo, winElo);

        //update score, 1 if won 0 if lost
        winElo = await elo.updateRating(expectedScoreA, 1, winElo);
        losElo = await elo.updateRating(expectedScoreB, 0, losElo);

        await db.Player.updateOne(
            { _id: data.winner },
            { $set: { ratings: winElo } }
        )
        .then(res => console.log(res))
        .catch(err => console.log(err));
        await db.Player.updateOne(
            { _id: data.loser },
            { $set: { ratings: losElo } }
        )
        .then(res => console.log(res))
        .catch(err => console.log(err));
      })
      .catch((err) => res.status(422).json(err));
  },
};
