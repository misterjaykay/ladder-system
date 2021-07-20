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
    winnerRace: {
        type: String,
        required: true
    },
    loser: {
        type: Schema.Types.ObjectId, 
        ref: 'Player' 
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