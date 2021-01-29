const router = require("express").Router();

const { createPool } = require("mysql");
const {query} = require("../db_connection");

router.get("/:search", (req, res) => {

  const search = req.params.search;

  query(`SELECT genshin_characters.name, genshin_thumbs.src, genshin_thumbs.alt FROM genshin_characters, genshin_thumbs WHERE genshin_thumbs.id = genshin_characters.thumbnail AND genshin_characters.name LIKE '%${search}%'`)
  .then(data => {
    const results = data;
    
    res.status(200).json({results: results});
  })
})

module.exports = router;