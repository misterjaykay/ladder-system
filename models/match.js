const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    matchId: {
        type: String,
        required: true,
        unique: true
    },
    winner: {
        type: Schema.Types.ObjectId, 
        ref: 'Player' 
    },
    winnerName: {
        type: String,
        required: true
    },
    winnerRace: {
        type: String,
        required: true
    },
    loser: {
        type: Schema.Types.ObjectId, 
        ref: 'Player' 
    },
    loserName: {
        type: String,
        required: true
    },
    loserRace: {
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
        type: Boolean,
        default: false,
        required: true
    }
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;