const { json } = require("express");
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Match.find(req.query)
            .then(dbMatch => res.json(dbMatch))
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Match.create(req.body)
        // .then()
            .then(dbMatch => res.json(dbMatch))
            .catch(err => res.json(err));
    }
}