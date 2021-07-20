const router = require("express").Router();
const matchController = require("../../controllers/matchController");

router.route("/")
    .get(matchController.findAll)
    .post(matchController.create);

module.exports = router;