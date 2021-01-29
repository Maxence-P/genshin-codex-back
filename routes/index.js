const router = require("express").Router();
const homeRouter = require("./home.routes");
const searchRouter = require("./search.routes");

router.use("/home", homeRouter);
router.use("/search", searchRouter);

module.exports = router;