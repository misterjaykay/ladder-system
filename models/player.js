const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playerId: {
        type: String,
        required: true,
        unique: true
    },
    playerName: {
        type: String,
        required: true,
        unique: true
    },
    abbr: {
        type: String,
        required: true,
        unique: true 
    },
    wins: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Match' 
    }],
    losses: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Match' 
    }],
    ratings: {
        type: Number,
        default: 1000
    }
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;