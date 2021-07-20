let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/bwladder", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let playerSeed = [
  {
    playerId: 001,
    playerName: "Red_Propaganda",
    abbr: "rp"
  },
  {
    playerId: 002,
    playerName: "Kuto",
    abbr: "kuto"
  },
  {
    playerId: 003,
    playerName: "Rikimaru",
    abbr: "rikimaru"
  },
  {
    playerId: 004,
    playerName: "Rekay",
    abbr: "rekay"
  },
];

db.Player.deleteMany({})
  .then(() => db.Player.insertMany(playerSeed))
  .then((data) => {
    console.log("records inserted!", data);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
