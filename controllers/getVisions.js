const {query} = require("../db_connection");

const getVisions = async () => {
  const sql = "SELECT genshin_visions.vision FROM genshin_visions";
  const result = await query(sql);
  return result;
}

module.exports = getVisions;