const router = require("express").Router();
const getCities = require("../controllers/getCities");
const getWeapons = require("../controllers/getWeapons");
const getVisions = require("../controllers/getVisions");

router.get("/", async (req, res) => {
    
    const listItems = [];
    listItems.push(await getCities());
    listItems.push(await getVisions());
    listItems.push(await getWeapons());
    res.status(200).json(listItems);
});

module.exports = router;