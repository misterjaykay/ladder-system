const router = require("express").Router();
const playerController = require("../../controllers/playerController");

router.route("/")
    .get(playerController.findAll)

router.route("/:id")
    .put(playerController.updateElo);

module.exports = router;