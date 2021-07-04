const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    matchId: {
        type: String,
        required: true,
        unique: true
    },
    winner: {
        type: String,
        required: true
    },
    loser: {
        type: String,
        required: true
    },
    map: {
        type: String,
        required: true,
    },
    imgLink: {
        type: String,
        required: true
    },
    isAdmin: {
        type: String,
        required: true
    }
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;