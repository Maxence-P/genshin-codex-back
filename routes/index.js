const router = require("express").Router();
const homeRouter = require("./home.routes");

router.use("/home", homeRouter);

module.exports = router;