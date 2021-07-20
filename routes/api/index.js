const path = require("path");
const router = require("express").Router();
const matchRoutes = require("./matches");
const playerRoutes = require("./players")
// const googleRoutes = require("./google");

router.use("/matches", matchRoutes);
router.use("/players", playerRoutes);

// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;
