const { json } = require("express");
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("findAll req", req.query);
        db.Match.find(req.query)
            .then(dbMatch => res.json(dbMatch))
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        console.log("create req", req.query);
        db.Match.create(db.body)
            .then(dbMatch => res.json(dbMatch))
            .catch(err => res.json(err));
    }
}