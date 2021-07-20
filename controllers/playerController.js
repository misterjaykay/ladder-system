const { json } = require("express");
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Player.find({})
            .then(dbPlayer => {
                res.json(dbPlayer)
                console.log(dbPlayer)
            })
            .catch(err => res.status(422).json(err));
    },
}